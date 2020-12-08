# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

This command install the package manager `yarn`

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment
1. Fork from this repository. You can refer to [this](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) for detailed explanation 

2. Deploy it using GitHub pages for hosting. This command is a convenient way to build the website and push to the `gh-pages` branch. 
```console
GIT_USER=<Your GitHub username> USE_SSH=false yarn deploy
```
**Please make sure the length of your file path does not exceed the maximum length limitation of OS**
