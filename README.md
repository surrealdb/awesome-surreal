<!--lint disable awesome-git-repo-age-->

<p align="center">
  <a href="https://surrealdb.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="img/white/logo.svg">
      <img width="240" src="img/black/logo.svg" alt="SurrealDB">
    </picture>
  </a>
</p>

# Awesome SurrealDB [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

> Tools, libraries, example applications, and learning material for SurrealDB, the database that unifies documents, graphs, vectors, and time-series in one engine, and for SurrealDB Agent Memory.

<p>
  <a href="https://surrealdb.com/docs/labs"><img src="https://img.shields.io/badge/search_this_list-surrealdb.com%2Fdocs%2Flabs-d255fe?style=flat-square" alt="Search this list"></a>
  <a href="https://surrealdb.com/discord"><img src="https://img.shields.io/discord/902568124350599239?label=discord&style=flat-square&color=8986a2" alt="Discord"></a>
  <a href="https://github.com/surrealdb/surrealdb"><img src="https://img.shields.io/github/stars/surrealdb/surrealdb?style=flat-square&label=surrealdb&color=8986a2" alt="SurrealDB stars"></a>
</p>

Every entry in this list also appears in [SurrealDB Labs](https://surrealdb.com/docs/labs), where you can search and filter it by stage, format, topic, and language. Entries marked **Recipe** have a short, tested version in the [SurrealDB cookbook](https://surrealdb.com/docs/explore/tutorials/cookbook) that runs on the current release.

Built something with SurrealDB? [Add it to the list](CONTRIBUTING.md).

<!-- BEGIN LIST: generated from entries/ by `bun run build`, do not edit -->

## Contents

- [Start here](#start-here)
- [Official SDKs](#official-sdks)
- [Tools](#tools)
  - [Management interfaces](#management-interfaces)
  - [Schema and code generation](#schema-and-code-generation)
  - [ORMs and query builders](#orms-and-query-builders)
  - [Data movement](#data-movement)
  - [Deployment and operations](#deployment-and-operations)
- [Community client libraries](#community-client-libraries)
- [Integrations](#integrations)
  - [AI and agents](#ai-and-agents)
  - [Authentication](#authentication)
  - [Frameworks and platforms](#frameworks-and-platforms)
- [Extensions](#extensions)
- [Example applications](#example-applications)
  - [Starter projects](#starter-projects)
  - [Demos](#demos)
  - [Interactive demos](#interactive-demos)
- [Projects built on SurrealDB](#projects-built-on-surrealdb)
- [Learning](#learning)
  - [Courses and books](#courses-and-books)
  - [Tutorials and articles](#tutorials-and-articles)
  - [Videos](#videos)
  - [Talks and presentations](#talks-and-presentations)

## Start here

- [SurrealDB](https://github.com/surrealdb/surrealdb) - The database itself: source, releases, and issue tracker.
- [Documentation](https://surrealdb.com/docs) - Installation, SurrealQL reference, SDK guides, and deployment.
- [SurrealDB Cloud](https://surrealdb.com/cloud) - Managed SurrealDB instances, from a free tier upwards.
- [Docker image](https://hub.docker.com/r/surrealdb/surrealdb) - The official container image.

## Official SDKs

| Language                                                      | Repository                                                        | Install                                       |
| ------------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------- |
| [JavaScript](https://surrealdb.com/docs/reference/javascript) | [surrealdb.js](https://github.com/surrealdb/surrealdb.js)         | `npm install surrealdb`                       |
| [Python](https://surrealdb.com/docs/reference/python)         | [surrealdb.py](https://github.com/surrealdb/surrealdb.py)         | `pip install surrealdb`                       |
| [Rust](https://surrealdb.com/docs/reference/rust)             | [surrealdb](https://crates.io/crates/surrealdb)                   | `cargo add surrealdb`                         |
| [Go](https://surrealdb.com/docs/reference/golang)             | [surrealdb.go](https://github.com/surrealdb/surrealdb.go)         | `go get github.com/surrealdb/surrealdb.go/v2` |
| [Java](https://surrealdb.com/docs/reference/java)             | [surrealdb.java](https://github.com/surrealdb/surrealdb.java)     | `com.surrealdb:surrealdb`                     |
| [Kotlin](https://surrealdb.com/docs/reference/kotlin)         | [surrealdb.kotlin](https://github.com/surrealdb/surrealdb.kotlin) | `com.surrealdb:kotlin`                        |
| [.NET](https://surrealdb.com/docs/reference/dotnet)           | [surrealdb.net](https://github.com/surrealdb/surrealdb.net)       | `dotnet add package SurrealDb.Net`            |
| [PHP](https://surrealdb.com/docs/reference/php)               | [surrealdb.php](https://github.com/surrealdb/surrealdb.php)       | `composer require surrealdb/surrealdb.php`    |
| [Swift](https://surrealdb.com/docs/reference/swift)           | [surrealdb.swift](https://github.com/surrealdb/surrealdb.swift)   | Swift Package Manager                         |
| C                                                             | [surrealdb.c](https://github.com/surrealdb/surrealdb.c)           | Build from source                             |

## Tools

### Management interfaces

- [Mongrel](https://www.visorcraft.com/mongrel) - Desktop workbench for SurrealDB 3.2 and later, with a SurrealQL editor, document and graph browsing, schema tools, and native archives.
- [SurrealDB Studio](https://github.com/surrealdb/surrealist) - Official query editor, schema designer, and database explorer, formerly called Surrealist.

### Schema and code generation

- [surform](https://github.com/jquesada2016/surform) - Declarative schema language for SurrealDB that generates the `DEFINE` statements.
- [surreal-codegen](https://github.com/siteforge-io/surreal-codegen) - Generate type-safe TypeScript for your `.surql` queries by checking them against your schema.
- [surreal-ts](https://github.com/horvbalint/surreal-ts) - Generate TypeScript types from a SurrealDB schema.
- [surrealdb-client-generator](https://github.com/sebastianwessel/surrealdb-client-generator) - Generate Zod schemas and a TypeScript client from a database.
- [SurrealDb.Net.Design](https://github.com/NodKane/surrealdb.net.design) - Generate C# record models from a database schema at design time.

### ORMs and query builders

- [allographer](https://github.com/itsumura-h/nim-allographer) - Query builder and schema builder for Nim with SurrealDB support.
- [sqlalchemy-surrealdb](https://github.com/noctisynth/sqlalchemy-surrealdb) - SQLAlchemy dialect for SurrealDB.
- [surrealdb_extra](https://github.com/jakin010/surrealdb_extra) - Query builder and ORM for Rust.
- [surrealdb-extras](https://docs.rs/surrealdb-extras/latest/surrealdb_extras/) - Rust helpers that define namespaces, databases, and tables, and derive CRUD functions for structs.
- [surrealdb-valibot](https://github.com/ShadowWolf308/surrealdb-valibot) - Reusable Valibot schemas for the JavaScript SDK.
- [surrealdb-zod](https://github.com/ShadowWolf308/surrealdb-zod) - Reusable Zod schemas for the JavaScript SDK.
- [UnrealORM](https://unreal-orm.jimpex.dev) - TypeScript ORM designed around SurrealDB models and relations.

### Data movement

- [Surreal Transfer](https://github.com/LucyEgan/surreal-transfer) - Command-line tools to export and import SurrealDB data.
- [VentStream](https://ventstream.dev/docs/connectors/sinks/surrealdb) - Change data capture from PostgreSQL, MySQL, MongoDB, and Neo4j into SurrealDB in real time.

### Deployment and operations

- [AspNetCore.HealthChecks.SurrealDb](https://www.nuget.org/packages/AspNetCore.HealthChecks.SurrealDb) - ASP.NET Core health check for SurrealDB connectivity.
- [Dokku SurrealDB](https://github.com/IgnisDa/dokku-surrealdb) - Dokku plugin to deploy SurrealDB.
- [GKE using Terraform](https://github.com/dvanmali/terraform-google-surrealdb) - Multi-cluster, cross-region deployment on GKE Autopilot with Terraform.
- [Helm charts](https://github.com/surrealdb/helm-charts) - Official Helm charts for running SurrealDB on Kubernetes.
- [SurrealDB GitHub Action](https://github.com/marketplace/actions/surrealdb-in-github-action) - Official action to start SurrealDB in a CI workflow.
- [SurrealDB Grafana datasource](https://github.com/grafana/surrealdb-datasource) - Query and chart SurrealDB data from Grafana.

## Community client libraries

- [java-surrealrpc](https://git.gay/buj/java-surrealrpc) - Small alternative Java client.
- [surrealdb-flutter](https://github.com/duhanbalci/surrealdb_flutter) - Client for Dart and Flutter.
- [surrealist](https://github.com/kotolex/surrealist) - Synchronous Python client over HTTP and WebSocket, with live queries and change feeds.

## Integrations

### AI and agents

- [Agent skills](https://github.com/surrealdb/agent-skills) - Official skills that teach coding agents SurrealQL and Agent Memory. [Documentation](https://surrealdb.com/docs/build/ai-agents/agent-skills).
- [langchain-surrealdb](https://github.com/surrealdb/langchain-surrealdb) - Official LangChain integration for vector search and graph queries.
- [langchain.js](https://github.com/surrealdb/langchain.js) - Official LangGraph.js adapter for SurrealDB and Agent Memory.
- [SurrealDB MCP Server](https://github.com/nsxdavid/surrealdb-mcp-server) - Model Context Protocol server that lets AI assistants query and change a SurrealDB database.

### Authentication

- [surreal-better-auth](https://github.com/oskar-gmerek/surreal-better-auth) - SurrealDB adapter for Better Auth.

### Frameworks and platforms

- [.NET Aspire integration](https://www.nuget.org/packages/CommunityToolkit.Aspire.Hosting.SurrealDb) - Run SurrealDB containers from a .NET Aspire AppHost.
- [SurrealDB ODataV4 Connector](https://github.com/knackstedt/odatav4) - Serve SurrealDB tables through an OData v4 endpoint.

## Extensions

- [try_cast](https://git.gay/buj/surreal-try-cast) - Surrealism extension that adds `mod::try_*` functions for checked type casts.

## Example applications

### Starter projects

- [SurrealDB + Go starter](https://github.com/sbshah97/surrealdb-go-starter-project) - Application skeleton using the official Go SDK. By Salman Shah.
- [SurrealDB + SvelteKit auth example](https://github.com/AlbertMarashi/surrealdb-svelte-auth-template) - JWT authentication with a request-scoped database connection. By Albert Marashi.
- [SurrealDB + Vue blog starter](https://github.com/SrWither/surrealdb-vuejs) - Blog template with a Vue front end. By Fadel SrWither.
- [SvelteKit Surreal authentication](https://github.com/jdgamble555/sveltekit-surreal-js) - Sign-in and sessions with SvelteKit and record access. By Jonathan Gamble.

### Demos

<!--lint ignore double-link-->
- [IoT telemetry](https://github.com/surrealdb/example-iot-telemetry) - Simulated sensors, time-windowed queries, and outlier alerts, with a live dashboard. By Martin Schaer. **Recipe:** [IoT telemetry with outlier alerts](https://surrealdb.com/docs/explore/tutorials/cookbook/iot-telemetry).
- [Official examples](https://github.com/surrealdb/examples) - Example applications and scripts maintained by the SurrealDB team.
- [Surreal-4o](https://github.com/sFritsch09/surreal-4o) - Datasets for fine-tuning a model to write SurrealQL. By Sebastian Fritsch.
- [SurrealDB AI assistant](https://surrealdb-ai.jimpex.dev/) - Web assistant that explores a SurrealDB database in natural language. By Jimpex.
- [SurrealDB AI docs retrieval](https://github.com/truskovskiyk/surrealdb-docs-retrieval) - Question answering over the SurrealDB documentation with a GPT model. By Kyryl Truskovskyi.
- [SurrealDB presence demo](https://github.com/Odonno/surrealdb-presence-demo) - Real-time presence with live queries. By David Bottiau.
- [SurrealDB vector store notebook](https://github.com/lalanikarim/notebooks/blob/main/SurrealDB-Langchain.ipynb) - Jupyter notebook using SurrealDB as a LangChain vector store. By Karim Lalani.

### Interactive demos

- [Agent Memory for financial services](https://surrealdb.com/explore/agent-memory-for-financial-services) - Agent Memory in a financial services setting, showing scopes and how facts change over time.
- [Company brain](https://surrealdb.com/explore/company-brain) - A company knowledge base on SurrealDB and Agent Memory that agents and people query together.
- [Credit downgrade exposure alerts](https://surrealdb.com/explore/use-case-credit-downgrade) - An agent traces exposure through the graph when a counterparty is downgraded.
- [Financial services ontology](https://surrealdb.com/explore/financial-services-ontology) - Eight source systems mapped into one graph.
- [What is agent memory?](https://surrealdb.com/explore/what-is-agent-memory) - The six kinds of agent memory, what each stores, and how they connect.

## Projects built on SurrealDB

- [dead-reckoning](https://github.com/atwmarshall/dead-reckoning) - Navigate a Python codebase through a knowledge graph and resumable LangGraph agents.
- [Inite Brain](https://github.com/inite-ai/inite-brain-service) - Memory layer for LLM agents: a bitemporal knowledge graph with hybrid vector, BM25, and multi-hop retrieval, served over MCP.
- [open-notebook](https://github.com/lfnovo/open-notebook) - Open source alternative to NotebookLM.
- [Podcasts to Knowledge](https://github.com/cocoindex-io/cocoindex/tree/main/examples/conversation_to_knowledge) - Turn podcast and interview recordings into a knowledge graph with CocoIndex.
- [synapse](https://github.com/jawciu/synapse) - Turn written reflections into a knowledge graph and answer questions from it.
- [taro](https://github.com/j-d0g/taro) - Agentic search harness: a LangGraph ReAct agent with vector, BM25, graph, and hybrid search tools.

## Learning

### Courses and books

- [Aeon's Surreal Renaissance](https://surrealdb.com/learn/book) - Official book that teaches SurrealDB through a story.
- [SurrealDB for AI engineers](https://surrealdb.com/learn/ai) - Eleven lessons, from calling an LLM API to an agent that retrieves from its own memory.
- [SurrealDB fundamentals](https://surrealdb.com/learn/fundamentals) - Official course covering the core of SurrealDB in about three hours.

### Tutorials and articles

<!--lint ignore double-link-->
- [Build a real-time presence app](https://surrealdb.com/docs/explore/tutorials/tutorials/build-a-real-time-presence-app) - Official tutorial: show who is online with live queries. By David Bottiau.
- [Build an AI RAG agent with LangGraph](https://github.com/colinmcnamara/austin_langchain/blob/main/labs/LangChain_104/104-langgraph-rag-agent.ipynb) - Retrieval agent with LangGraph, Ollama, and SurrealDB. By Karim Lalani.
- [CLI phone book in Python](https://python.code-maven.com/surrealdb-python-cli-phonebook) - Command-line phone book backed by SurrealDB. By Gabor Szabo.
- [Getting started with SurrealDB using Python and Docker](https://python.code-maven.com/surrealdb-getting-started) - Run SurrealDB in Docker and connect from Python. By Gabor Szabo.
- [How to use SurrealDB with Fresh and Deno](https://www.freecodecamp.org/news/how-to-use-surrealdb-with-fresh-framework/) - A Fresh application with a SurrealDB back end. By Rajdeep Singh. **Recipe:** [An HTTP API in the database](https://surrealdb.com/docs/explore/tutorials/cookbook/http-api-in-the-database).
- [Improve database management with SurrealDB](https://blog.logrocket.com/improve-database-management-surrealdb/) - Overview of SurrealDB's data model and queries. By Alexander Nnakwue.
- [Multi-tenant RBAC with SurrealDB](https://dev.to/sebastian_wessel/series/24535) - Four-part series on tenants, roles, and permissions as a graph. By Sebastian Wessel. **Recipe:** [Multi-tenant role-based access](https://surrealdb.com/docs/explore/tutorials/cookbook/multi-tenant-rbac).
- [Setting up an invite system](https://mord-blog.vercel.app/articles/surrealdb-invitation-system) - Invitation codes with record access. By Mordechai Hadad. **Recipe:** [Invitation sign-in](https://surrealdb.com/docs/explore/tutorials/cookbook/invitation-sign-in).
- [Simple API with Gin and SurrealDB](https://atoo.hashnode.dev/simple-api-with-gingonic-and-surrealdb) - REST API in Go. By Atharva Deshpande. **Recipe:** [An HTTP API in the database](https://surrealdb.com/docs/explore/tutorials/cookbook/http-api-in-the-database).

### Videos

<!--lint ignore double-link-->
- [Beyond Surreal? A closer look at NewSQL relational data](https://www.youtube.com/watch?v=LCAIkx1p1k0) - By Fireship.
- [Getting started with SurrealDB](https://www.youtube.com/watch?v=D41jb4DDIdA) - By Chris Hay.
- [Hosting SurrealDB in Rust in less than 3 minutes](https://www.youtube.com/watch?v=VoRoeL1tal4) - By Gui Bibeau.
- [Livestreams learning SurrealDB](https://www.youtube.com/playlist?list=PL5AVzKSngnt_xPGNuYdrbB7NZtJbQ046a) - By Xkonti.
- [Rust powered database SurrealDB](https://www.youtube.com/watch?v=DPQbuW9dQ7w) - By Code to the Moon.
- [SurrealDB in 100 seconds](https://www.youtube.com/watch?v=C7WFwgDRStM) - By Fireship.
- [SurrealDB, Rust embedded database](https://www.youtube.com/watch?v=iOyvum0D3LM) - By Jeremy Chone.
- [SurrealDB, the kitchen sink document store](https://www.youtube.com/watch?v=tWpj8Bc_jBQ) - By Ray Villalobos.
- [Using SurrealDB to prove football statistics](https://www.youtube.com/watch?v=6J1SPMXzOh4) - By Joseph McCarthy. **Recipe:** [Prove a sports statistic](https://surrealdb.com/docs/explore/tutorials/cookbook/sports-statistic).

From the [SurrealDB YouTube channel](https://www.youtube.com/@SurrealDB):

<details>
<summary><b>Data modelling and SurrealQL</b> (8 videos)</summary>

- [10 schema tips for SurrealDB](https://www.youtube.com/watch?v=KNxqL5ZHqFY)
- [Different ways to perform a vector search](https://www.youtube.com/watch?v=MqddPmgKSCs)
- [Document-style relationships](https://www.youtube.com/watch?v=TyX45cyZ-WO)
- [Full-text search queries in SurrealQL](https://www.youtube.com/watch?v=AEzx1lt0ojY)
- [Graph-style relationships](https://www.youtube.com/watch?v=zwQwKvMa9sU)
- [Relational-style relationships](https://www.youtube.com/watch?v=98QhvBFjcQ4)
- [Schemaless vs schemafull databases](https://www.youtube.com/watch?v=H5PfRJQIKeE)
- [Understanding user groups](https://www.youtube.com/watch?v=cGAxH9FezUY)

</details>

<details>
<summary><b>SDKs and engines</b> (7 videos)</summary>

- [Build a full stack Rust dashboard with Leptos, Actix Web and SurrealDB](https://www.youtube.com/watch?v=DQB-cJPYChg)
- [Build a Rust back end with Actix Web and SurrealDB](https://www.youtube.com/watch?v=Rnw-x21kGaA)
- [CRUD using SurrealDB in Rust](https://www.youtube.com/watch?v=3o58KxYOn3E)
- [Getting started with the JavaScript SDK](https://www.youtube.com/watch?v=fLCO_digirs)
- [Getting started with the Rust SDK](https://www.youtube.com/watch?v=l1cuddL6A80)
- [Run SurrealDB in your browser with the WebAssembly engine](https://www.youtube.com/watch?v=D7u5UmrVG3g)
- [Run SurrealDB inside Node.js with the Node.js engine](https://www.youtube.com/watch?v=uW_9Hqg7N4Q)

</details>

<details>
<summary><b>SurrealDB Studio</b> (7 videos)</summary>

- [10 tips and tricks for SurrealDB Studio](https://www.youtube.com/watch?v=lbzoKPBWw3Q)
- [Building an app with graph relations, live queries and authentication](https://www.youtube.com/watch?v=m7TwzxEHC-Q)
- [Designing your schema in SurrealDB Studio](https://www.youtube.com/watch?v=Z1YRY8d7nyg)
- [Embed SurrealDB Studio in your projects](https://www.youtube.com/watch?v=AzQBvyg9Awc)
- [Getting started with SurrealDB Studio](https://www.youtube.com/watch?v=VQnHYKNiPso)
- [Graph, full-text search and vector search in SurrealDB Studio](https://www.youtube.com/watch?v=_tod9GzWe2E)
- [SurrealDB Studio for power users](https://www.youtube.com/watch?v=q5LFNPpH2X0)

</details>

<details>
<summary><b>SurrealDB Cloud</b> (2 videos)</summary>

- [Getting started with SurrealDB Cloud](https://www.youtube.com/watch?v=S04qOKkVcmE)
- [Network capabilities in SurrealDB Cloud](https://www.youtube.com/watch?v=EUp5PxbzvV4)

</details>

### Talks and presentations

<!--lint ignore double-link-->
- [Agent Memory for engineering knowledge](https://drive.google.com/file/d/1v4l6eyjGTqGJIlrbuiqd2gQrRrLu2BSp/view) - Documents, runbooks, postmortems, and agent session notes in one store. By Martin Schaer.
- [How a luxury fashion retailer scaled personalised recommendations](https://www.youtube.com/watch?v=yLw9MvNfuY8) - Customer context, product variants, and embeddings in one database. **Recipe:** [Context for a recommendation prompt](https://surrealdb.com/docs/explore/tutorials/cookbook/recommendation-context).
- [How I built a SaaS powered by SurrealDB](https://youtube.com/live/NMcMSqemMo0) - A live session on building a product on SurrealDB.
- [How to simplify your tech stack with SurrealDB](https://www.youtube.com/watch?v=kHnn1XTnZCk) - Replacing several specialised stores with one database.
- [Your company brain: build it or buy it?](https://drive.google.com/file/d/1AicYVQUGEA7EsIjGlIiAHaXZNDh8I1E1/view) - SurrealDB Enterprise Edition and Agent Memory compared. By Martin Schaer.

<!-- END LIST -->
