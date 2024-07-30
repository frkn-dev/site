## Dev-mode

```sh
npm run dev
```

### Requirements

[Node.js LTS](https://nodejs.org). IDE with [TypeScript](https://code.visualstudio.com/docs/languages/typescript) and [Biome](https://biomejs.dev/guides/integrate-in-editor/) support.

To automatically format code, it is important to properly configure your IDE. See an example for VS Code (`.vscode/settings.json`).

### Stack

- [Next.js](https://nextjs.org/docs/getting-started/project-structure#app-routing-conventions) app Routing Conventions
- [Prisma ORM](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma)
- [FSD](https://feature-sliced.design/ru/docs/get-started/overview) folder structure

### API

The API documentation is maintained in OpenAPI format in the `shared/api/schema.yaml` file. TypeScript types are [generated](https://www.npmjs.com/package/openapi-typescript) with the command `npm run api`.

### DB

Run migrations when the schema changes. For local development, use Docker with PostgreSQL and pgAdmin (`localhost:5050`). Connection parameters are in `docker-compose.yml`.

```sh
docker-compose up -d
npx prisma migrate deploy
npx prisma studio
```

## Build

```sh
npm run build
```

The project is automatically deployed to Vercel upon merging into the main branch.

### Env

Fill in all required environment variables. Use `.env.example` as a template for your `.env` file.
