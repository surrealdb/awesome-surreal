# Contributing

Thank you for adding to the list. Each entry is one small YAML file in [`entries/`](entries), and the list in `README.md` is generated from those files. The same entries appear in [SurrealDB Labs](https://surrealdb.com/docs/labs), where readers can search and filter them.

## What belongs here

Add projects, libraries, tools, articles, videos, and talks that are useful to people building with SurrealDB. An entry should work with SurrealDB 3.0 or later.

## Add an entry

1. Create a file in `entries/` named after your entry, using lowercase letters, digits, and hyphens, such as `entries/my-project.yml`. You can do this in the browser with **Add file** on GitHub.
2. Fill it in, following the example below.
3. Run `bun install` once, then `bun run build`, which checks your entry and adds it to `README.md`.
4. Commit both files and open a pull request.

If you cannot run Bun, open the pull request with the entry alone. CI reports what is missing, and a maintainer can run the build for you.

```yaml
title: my-project
url: https://github.com/you/my-project
description: Generate TypeScript types from a SurrealDB schema.
section: schema-and-code-generation
author:
  name: Your Name
  github: your-github-username
date: 2026-11-12
stage: Build
format: Source code
topics:
  - Data management
languages:
  - TypeScript
```

## Fields

| Field         | Required | Value                                                                                                                       |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| `title`       | Yes      | The name of the project, article, or video.                                                                                 |
| `url`         | Yes      | Where it lives.                                                                                                             |
| `description` | Usually  | One sentence that starts with a capital letter and ends with a full stop. Do not repeat the title.                          |
| `section`     | Yes      | The id of a section in [`sections.yml`](sections.yml), such as `starter-projects` or `tutorials-and-articles`.              |
| `author`      | Yes      | `name`, and optionally `github` (your username, for the photo on your Labs card) and `role` (such as `Software Engineer`).   |
| `date`        | Yes      | The date you add the entry, as `YYYY-MM-DD`.                                                                                |
| `stage`       | Yes      | `Explore`, `Learn`, `Prototype`, `Build`, or `Operate`: where a reader is when this is useful.                              |
| `format`      | Yes      | `Source code`, `Video`, `Article`, `Documentation`, `Interactive demo`, or `Presentation`.                                  |
| `topics`      | No       | Any of `AI`, `Cloud`, `Data management`, `Financial services`, and `Security`.                                               |
| `languages`   | No       | Any of `Python`, `Rust`, `TypeScript`, `Go`, `Java`, `PHP`, and `SurrealQL`.                                                 |

`stage`, `format`, `topics`, and `languages` are the filters on [SurrealDB Labs](https://surrealdb.com/docs/labs). To suggest a new value, open an issue.

### Choosing a stage

Choose the stage of a reader's journey that the entry serves best:

- **Explore**: what SurrealDB is and why to use it, such as talks, overviews, comparisons, use cases, and engineering deep dives.
- **Learn**: content that teaches a concept, such as tutorials, courses, and walkthroughs.
- **Prototype**: templates, starter kits, and example applications to fork for a proof of concept.
- **Build**: libraries, SDKs, ORMs, integrations, and developer tools for active development.
- **Operate**: deployment, security, performance, and monitoring in production.

### Choosing a format

- **Source code**: a repository, package, or library.
- **Video**: a video or livestream.
- **Article**: a blog post or other written piece.
- **Documentation**: reference documentation or a guide.
- **Interactive demo**: a page that readers can use, not only read.
- **Presentation**: slides from a talk.

The README lists entries alphabetically within each section, so there is no order to choose.
