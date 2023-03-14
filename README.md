# Blip Extension Template

## How to use the template

<!-- TODO: Write -->

Note: To have an up-to-date project, verify when this template was last updated. If you believe it was too long ago, consider recreating it following (and changing if necessary) the [steps below.](#how-to-re-create-the-template)

## Technology stack

-   React
-   TypeScript
-   Blip Design System
-   Tailwind CSS
-   NPM
-   Vite
-   Fontsource
-   ESLint, Prettier & CSpell
-   Husky with lint-staged and commitlint

<!-- TODO: Fix numbers -->

## How to re-create the template

1. Create a new React project using Vite. When Prompted, choose React with Typescript + SWC.
   [Instructions here.](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

2. Install Tailwind. [Instructions here.](https://tailwindcss.com/docs/guides/vite)

3. Install the Nunito Sans font using Fontsource. [Instructions here.](https://fontsource.org/docs/getting-started)

    3.1. Choose which font weights & styles to use, to cut down on payload sizes. [See configuration.](./src/lib/fonts.ts)

    3.2. Set it as the default font with Tailwind CSS. [Instructions here.](https://tailwindcss.com/docs/font-family#customizing-the-default-font)

4. Install Prettier. [Instructions here.](https://prettier.io/docs/en/install.html)

    4.1. Configure Prettier. [See configuration.](./package.json)

5. Install ESLint. [Instructions here.](https://eslint.org/docs/latest/use/getting-started)

    5.1. Integrate Prettier with ESlint. [Instructions here.](https://prettier.io/docs/en/integrating-with-linters.html)

    5.2. Integrate Tailwind CSS with ESLint. [Instructions here.](https://github.com/francoismassart/eslint-plugin-tailwindcss#2-install-eslint-plugin-tailwindcss)

    5.3. Configure ESLint. [See configuration.](./.eslintrc.cjs)

6. Install CSpell [Instructions here.](https://cspell.org/docs/installation/)

<!-- TODO: Add React Testing Library or Enzyme -->

6. Configure Git hooks

    6.1. Install husky. [Instructions here.](https://typicode.github.io/husky/#/?id=install)

    6.2. Install lint-staged. [Instructions here.](https://www.npmjs.com/package/lint-staged)

    6.3. Install commitlint. [Instructions here.](https://commitlint.js.org/#/guides-local-setup?id=install-commitlint)

7. Configure VScode settings

    7.1. Configure settings. [See configuration.](./.vscode/settings.json)

    7.2. Configure extensions. [See configuration.](./.vscode/extensions.json)
