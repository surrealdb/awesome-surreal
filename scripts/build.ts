// Validates every entry in entries/ and writes the list into README.md between
// the BEGIN LIST and END LIST markers. With --check it writes nothing and fails
// when README.md differs from what the entries produce.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { type Entry, entrySchema, type Section, sectionsSchema } from "./schema";

const root = join(import.meta.dir, "..");
const check = process.argv.includes("--check");
const BEGIN = "<!-- BEGIN LIST: generated from entries/ by `bun run build`, do not edit -->";
const END = "<!-- END LIST -->";

const errors: string[] = [];

const sections = sectionsSchema.parse(Bun.YAML.parse(readFileSync(join(root, "sections.yml"), "utf8")));
const leaves = new Map<string, Section>();
const collect = (list: Section[]) => {
	for (const s of list) {
		if (s.sections) collect(s.sections);
		else leaves.set(s.id, s);
	}
};
collect(sections);

const entries: Entry[] = [];
for (const file of readdirSync(join(root, "entries")).sort()) {
	if (!file.endsWith(".yml")) {
		errors.push(`entries/${file}: entry files end in .yml`);
		continue;
	}
	const slug = file.slice(0, -4);
	if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
		errors.push(`entries/${file}: use lowercase letters, digits and single hyphens in the file name`);
	}
	const parsed = entrySchema.safeParse(Bun.YAML.parse(readFileSync(join(root, "entries", file), "utf8")));
	if (!parsed.success) {
		for (const issue of parsed.error.issues) {
			errors.push(`entries/${file}: ${issue.path.join(".") || "entry"} ${issue.message}`);
		}
		continue;
	}
	const entry = { ...parsed.data, slug };
	const section = leaves.get(entry.section);
	if (!section) {
		errors.push(`entries/${file}: section "${entry.section}" is not a leaf section in sections.yml`);
	} else if (entry.group && !section.groups?.some((g) => g.id === entry.group)) {
		errors.push(`entries/${file}: group "${entry.group}" is not a group of section "${entry.section}"`);
	} else if (section.layout === "table" && !entry.sdk) {
		errors.push(`entries/${file}: an entry in "${entry.section}" needs an sdk field`);
	} else if (!entry.group && !section.layout && !entry.description && !(section.credit && entry.author)) {
		errors.push(`entries/${file}: needs a description, or an author in a section that credits authors`);
	}
	entries.push(entry);
}

const seen = new Map<string, string>();
for (const entry of entries) {
	const other = seen.get(entry.url);
	if (other) errors.push(`entries/${entry.slug}.yml: same url as entries/${other}.yml`);
	seen.set(entry.url, entry.slug);
}

if (errors.length) {
	console.error(errors.join("\n"));
	process.exit(1);
}

const byOrder = (a: Entry, b: Entry) =>
	(a.position ?? Number.MAX_SAFE_INTEGER) - (b.position ?? Number.MAX_SAFE_INTEGER) ||
	a.title.localeCompare(b.title, "en", { sensitivity: "base" });

const anchor = (title: string) =>
	title
		.toLowerCase()
		.replace(/[^\p{L}\p{N}\s-]/gu, "")
		.replace(/\s/g, "-");

function line(entry: Entry, section: Section): string {
	const parts = [];
	if (entry.description) parts.push(entry.description);
	if (section.credit && entry.author && entry.author !== "surrealdb") {
		const name = entry.author.name;
		parts.push(name.endsWith(".") ? `By ${name}` : `By ${name}.`);
	}
	for (const l of entry.links ?? []) parts.push(`[${l.title}](${l.url}).`);
	if (entry.recipe) parts.push(`**Recipe:** [${entry.recipe.title}](${entry.recipe.url}).`);
	return `- [${entry.title}](${entry.url})${parts.length ? ` - ${parts.join(" ")}` : ""}`;
}

function table(list: Entry[]): string[] {
	const rows = list.map((e) => {
		const sdk = e.sdk!;
		return [sdk.docs ? `[${sdk.language}](${sdk.docs})` : sdk.language, `[${e.title}](${e.url})`, sdk.install];
	});
	const head = ["Language", "Repository", "Install"];
	const widths = head.map((h, i) => Math.max(h.length, ...rows.map((r) => r[i].length)));
	const row = (cells: string[]) => `| ${cells.map((c, i) => c.padEnd(widths[i])).join(" | ")} |`;
	return [row(head), `| ${widths.map((w) => "-".repeat(w)).join(" | ")} |`, ...rows.map(row)];
}

function leaf(section: Section): string[] {
	const list = entries.filter((e) => e.section === section.id).sort(byOrder);
	if (section.layout === "table") return table(list);

	const out = list.filter((e) => !e.group).map((e) => line(e, section));
	// awesome-lint reports a URL that appears twice in the README, and one
	// recipe can be the short version of several entries.
	if (list.some((e) => e.recipe)) out.unshift("<!--lint ignore double-link-->");
	if (section.groups) {
		if (section.groupsIntro) out.push("", section.groupsIntro);
		for (const group of section.groups) {
			const items = list.filter((e) => e.group === group.id);
			if (!items.length) continue;
			const count = `${items.length} ${list[0]?.format === "Video" ? "videos" : "entries"}`;
			out.push("", "<details>", `<summary><b>${group.title}</b> (${count})</summary>`, "");
			out.push(...items.map((e) => `- [${e.title}](${e.url})`));
			out.push("", "</details>");
		}
	}
	return out;
}

const hasEntries = (s: Section): boolean =>
	s.sections ? s.sections.some(hasEntries) : entries.some((e) => e.section === s.id);

const body: string[] = [];
const contents: string[] = ["## Contents", ""];
for (const top of sections.filter(hasEntries)) {
	contents.push(`- [${top.title}](#${anchor(top.title)})`);
	body.push("", `## ${top.title}`, "");
	if (top.sections) {
		for (const sub of top.sections.filter(hasEntries)) {
			contents.push(`  - [${sub.title}](#${anchor(sub.title)})`);
			body.push(`### ${sub.title}`, "", ...leaf(sub), "");
		}
		body.pop();
	} else {
		body.push(...leaf(top));
	}
}

const generated = [BEGIN, "", ...contents, ...body, "", END].join("\n");

const readmePath = join(root, "README.md");
const readme = readFileSync(readmePath, "utf8");
const start = readme.indexOf(BEGIN);
const end = readme.indexOf(END);
if (start < 0 || end < start) {
	console.error(`README.md needs the markers:\n${BEGIN}\n${END}`);
	process.exit(1);
}
const next = readme.slice(0, start) + generated + readme.slice(end + END.length);

if (check) {
	if (next !== readme) {
		console.error(
			"README.md does not match the entries. The list is generated: add or change a file in entries/ rather than editing README.md, then run `bun run build` and commit the result.",
		);
		process.exit(1);
	}
	console.log(`README.md matches ${entries.length} entries.`);
} else {
	writeFileSync(readmePath, next);
	console.log(`Wrote README.md from ${entries.length} entries.`);
}
