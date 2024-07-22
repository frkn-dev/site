## Dev-mode

```sh
npm run dev
```

### Requirements

[Node.js LTS](https://nodejs.org). IDE with [TypeScript](https://code.visualstudio.com/docs/languages/typescript) and [Biome](https://biomejs.dev/guides/integrate-in-editor/) support.

To automatically format code, it is important to properly configure your IDE. Here is an example for VS Code (`.vscode/settings.json`):

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "biomejs.biome",
  "editor.codeActionsOnSave": {
    "source.organizeImports.biome": "explicit"
  }
}
```

### Stack

- [Next.js](https://nextjs.org/docs/getting-started/project-structure#app-routing-conventions) app Routing Conventions
- [FSD](https://feature-sliced.design/ru/docs/get-started/overview) folder structure

## Build

```sh
npm run build
```

The project is automatically deployed to Vercel upon merging into the main branch.
