import { z } from "zod";

/**
 * The values each Labs filter offers. surrealdb.com/docs/labs reads every entry
 * in `entries/` and groups and filters it by these, so a new value needs the
 * same value added to the docs before it can be used here.
 */

/** Where a reader is on their journey with SurrealDB. */
export const stages = ["Explore", "Learn", "Prototype", "Build", "Operate"] as const;

/** What kind of thing an entry is. */
export const formats = [
	"Source code",
	"Video",
	"Article",
	"Documentation",
	"Interactive demo",
	"Presentation",
] as const;

/** What an entry is about. Subjects only: the kind of content is the format. */
export const topics = ["AI", "Cloud", "Data management", "Financial services", "Security"] as const;

export const languages = ["Python", "Rust", "TypeScript", "Go", "Java", "PHP", "SurrealQL"] as const;

const link = z.strictObject({
	title: z.string().min(1),
	url: z.url(),
});

const sentence = z
	.string()
	.min(1)
	.refine((s) => /^[A-Z0-9`."'(]/.test(s) && /[.!?]$/.test(s), {
		message: "must start with a capital letter and end with a full stop",
	});

const author = z.literal("surrealdb").or(
	z.strictObject({
		name: z.string().min(1),
		/** Shown under the name on the Labs card. */
		role: z.string().optional(),
		/** GitHub username, for the avatar. */
		github: z.string().optional(),
		/** Name of an avatar image held by the docs site. */
		avatar: z.string().optional(),
	}),
);

export const entrySchema = z
	.strictObject({
		title: z.string().min(1),
		url: z.url(),
		description: sentence.optional(),
		/** The id of a leaf section in `sections.yml`. */
		section: z.string(),
		/** The id of a collapsed group within the section, such as one series of videos. */
		group: z.string().optional(),
		/** Sorts the entry before those without one, lowest first. Other entries are alphabetical. */
		position: z.number().int().optional(),
		author: author.optional(),
		/** The date the entry was added, `YYYY-MM-DD`. Labs lists the newest first and fades entries over a year old. */
		date: z.iso.date().optional(),
		stage: z.enum(stages).optional(),
		format: z.enum(formats).optional(),
		topics: z.array(z.enum(topics)).default([]),
		languages: z.array(z.enum(languages)).optional(),
		/** A short, tested version of the entry in the SurrealDB cookbook. */
		recipe: link.optional(),
		/** Further links shown after the description, such as documentation. */
		links: z.array(link).optional(),
		/** A row of the official SDK table. */
		sdk: z
			.strictObject({
				language: z.string(),
				docs: z.url().optional(),
				install: z.string(),
			})
			.optional(),
		/** Set to false for an entry that belongs in the README but not in Labs, such as the documentation itself. */
		labs: z.boolean().default(true),
	})
	.superRefine((entry, ctx) => {
		if (!entry.labs) return;
		for (const key of ["author", "date", "stage", "format"] as const) {
			if (entry[key] === undefined) {
				ctx.addIssue({ code: "custom", path: [key], message: "is required for an entry shown in Labs" });
			}
		}
	});

export type Entry = z.output<typeof entrySchema> & { slug: string };

const sectionSchema: z.ZodType<Section> = z.lazy(() =>
	z.strictObject({
		id: z.string(),
		title: z.string(),
		/** Credit the author after each description. */
		credit: z.boolean().optional(),
		/** `table` renders the official SDK table instead of a list. */
		layout: z.enum(["list", "table"]).optional(),
		/** A line shown above the collapsed groups. */
		groupsIntro: z.string().optional(),
		groups: z.array(z.strictObject({ id: z.string(), title: z.string() })).optional(),
		sections: z.array(sectionSchema).optional(),
	}),
);

export interface Section {
	id: string;
	title: string;
	credit?: boolean;
	layout?: "list" | "table";
	groupsIntro?: string;
	groups?: { id: string; title: string }[];
	sections?: Section[];
}

export const sectionsSchema = z.array(sectionSchema);
