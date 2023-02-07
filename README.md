## About

Music Friday is a platform for sharing music among friends. In its purest form, the app seeks to recreate the experience of sharing music links with friends in a threaded fashion. As it grows, it will take on more features such as archiving, metadata insights from the music shared, unified links so no shared music is service locked, and more!

## FAQ

1. **What is Music Friday?**  Music Friday was a weekly off-topic thread among my colleagues where we all shared music that we were fond of, often with a prompt like "favorite song from your childhood", or "top 3 summer songs". This application replicates and expands on the music link sharing experience! It's a BYOC (bring your own computer) application, there is no centralized service.

2. **How is Music Friday distributed?**  Anyone can clone the repository, set up the necessary resources (Supabase and hosting), and follow the Self-hosting Instructions to get started!

> **NOTE:** As of the last update (2/6/23) this application is unfinished and cannot yet be self-hosted.

3. **Can I contribute to Music Friday?**  Of course! The joy of open-source repositories is that everyone can participate in some way. If you're not versed in any skills that contribute directly, you can even join in via the [Discussions tab on GitHub](https://github.com/kevinhaube/music-friday/discussions). If you _are_ versed in said skills, check out the [Contribution Guidelines](https://github.com/kevinhaube/music-friday/blob/main/CONTRIBUTING.md), and the selection of [Good First Issues](https://github.com/kevinhaube/music-friday/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22).

> **NOTE:** As of the last update (2/6/23) the Contribution Guidelines are forthcoming.

---

## Development Setup

| Technology | Version |
| ---------- | ------- |
| Vue | `3.2.x` |
| Vite | `4.1.x` |
| Typescript | `4.9.x` |
| Node | `16.19.x` |
 
> The following information is provided as a part of the `vue-typescript` project template from Vite

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
