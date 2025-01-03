## Dev-mode

```sh
cp .env.example .env
docker-compose up -d
pnpm install
npx prisma db push

pnpm run dev
```

### Requirements

[Node.js LTS](https://nodejs.org) and [pnpm](https://pnpm.io/installation#using-npm). IDE with [TypeScript](https://code.visualstudio.com/docs/languages/typescript) and [Biome](https://biomejs.dev/guides/integrate-in-editor/) support.

To automatically format code, it is important to properly configure your IDE. See an example for VS Code (`.vscode/settings.json`).

### Stack

- [Next.js](https://nextjs.org/docs/getting-started/project-structure#app-routing-conventions) App Routing Conventions
- [Prisma ORM](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma)

### DB

Run migrations when the schema changes. For local development, use Docker with PostgreSQL and pgAdmin (`localhost:5050`) or `npx prisma studio`.

## Build

```sh
pnpm run build
```

The project is automatically deployed to Vercel upon merging into the main branch.

### Security

The `pnpm test` command includes a package audit. Additionally, to ensure the security of our project, periodically update packages using `ncu` ([npm-check-updates](https://www.npmjs.com/package/npm-check-updates)) and [scan](https://www.npmjs.com/package/snyk) them with `snyk test`
