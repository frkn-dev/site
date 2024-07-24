## Dev-mode

```sh
npm run dev
```

### Requirements

[Node.js LTS](https://nodejs.org). IDE with [TypeScript](https://code.visualstudio.com/docs/languages/typescript) and [Biome](https://biomejs.dev/guides/integrate-in-editor/) support.

To automatically format code, it is important to properly configure your IDE. See an example for VS Code (`.vscode/settings.json`).

### Stack

- [Next.js](https://nextjs.org/docs/getting-started/project-structure#app-routing-conventions) app Routing Conventions
- [FSD](https://feature-sliced.design/ru/docs/get-started/overview) folder structure

### API

The API documentation is maintained in OpenAPI format in the `shared/api/schema.yaml` file. TypeScript types are [generated](https://www.npmjs.com/package/openapi-typescript) with the command `npm run api`.

## Build

```sh
npm run build
```

The project is automatically deployed to Vercel upon merging into the main branch.
