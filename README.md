# Blip Extension Template

## How to use the template

<!-- TODO: Write -->

Note: To have an up-to-date project, verify when this template was last updated. If you believe it was too long ago, consider recreating it following (and changing if necessary) the [steps below.](#how-to-re-create-the-template)

<!-- ### Minimal version

-   React
-   TypeScript or JavaScript
-   Blip Design System
-   NPM
-   Vite
-   Fontsource
-   ESLint & Prettier
-   React Router DOM
-   React Testing Library -->

### Complete version

-   React
-   TypeScript or JavaScript
-   Blip Design System
-   NPM
-   Vite
-   React Testing Library
-   ESLint, Prettier & CSpell
-   Tailwind CSS
-   Fontsource
-   Husky with lint-staged and commitlint
-   i18next
-   React Router DOM

<!-- TODO: Fix numbers -->

## Other templates

-   [JavaScript Template]()

## How to re-create this template

1. Create a new React project using Vite. When Prompted, choose React with TypeScript + SWC or JavaScript + SWC.
   [Instructions here.](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

2. Install Blip Design System. [Instructions here.](https://design.take.net/240287753/p/216ef2-instalao/t/773b48)

    2.1. Add `optimizeDeps: { exclude: ['blip-ds/loader'] }` to `./vite.config.ts`. This is a workaround to make blip-ds work with Vite. [See issue](https://github.com/vitejs/vite/issues/12434#issue-1626394546)

3. Install Tailwind. [Instructions here.](https://tailwindcss.com/docs/guides/vite)

4. Install the Nunito Sans font using Fontsource. [Instructions here.](https://fontsource.org/docs/getting-started)

    4.1. Choose which font weights & styles to use, to cut down on payload sizes. [See configuration.](./src/lib/setup/fonts.ts)

    4.2. Set it as the default font with Tailwind CSS. [Instructions here.](https://tailwindcss.com/docs/font-family#customizing-the-default-font)

5. Install Prettier. [Instructions here.](https://prettier.io/docs/en/install.html)

    5.1. Configure Prettier. [See configuration.](./package.json)

6. Install ESLint. [Instructions here.](https://eslint.org/docs/latest/use/getting-started)

    6.1. Integrate Prettier with ESlint. [Instructions here.](https://prettier.io/docs/en/integrating-with-linters.html)

    6.2. Integrate Tailwind CSS with ESLint. [Instructions here.](https://github.com/francoismassart/eslint-plugin-tailwindcss#2-install-eslint-plugin-tailwindcss)

    6.3. Configure ESLint. [See configuration.](./.eslintrc.cjs)

7. Configure Git hooks

    7.1. Install husky. [Instructions here.](https://typicode.github.io/husky/#/?id=install)

    7.2. Install lint-staged. [Instructions here.](https://www.npmjs.com/package/lint-staged)

    7.3. Install commitlint. [Instructions here.](https://commitlint.js.org/#/guides-local-setup?id=install-commitlint)

8. Configure VScode settings

    8.1. Configure settings. [See configuration.](./.vscode/settings.json)

    8.2. Configure extensions. [See configuration.](./.vscode/extensions.json)

9. Install CSpell. [Instructions here.](https://cspell.org/docs/installation/)

    9.1. Add CSpell's Brazilian Portuguese Dictionary. [Instructions here.](https://github.com/streetsidesoftware/cspell-dicts/tree/main/dictionaries/pt_BR)

    9.2. Add CSpell's Spanish Dictionary. [Instructions here.](https://github.com/streetsidesoftware/cspell-dicts/tree/main/dictionaries/es_ES)

    9.3. Configure CSpell. [See configuration.](./package.json)

10. Install i18next. [Instructions here.](https://react.i18next.com/getting-started)

    10.1. Install i18next-http-backend. [Instructions here.](https://react.i18next.com/getting-started)

    10.2. Add type safety. [Instructions here.](https://www.i18next.com/overview/typescript)

11. Install React Router Dom [Instructions here.](https://reactrouter.com/en/main/start/tutorial#setup)

12. Install React Testing Library. [Instructions here.](https://testing-library.com/docs/react-testing-library/intro/)

13. Install the iframe-message-proxy package

14. Finishing touches

    9.1. Set the website title to "Blip Extension".

    9.2. Set the website favicon. [See favicon.](./public/blip.svg)

    9.3. Install `tailwind-blip-ds`. [Instructions here.](https://github.com/heloineto-take/tailwind-blip-ds#installation)

### Recommended packages

Note: To keep the project's root folder clean, transform the configuration files with few lines into keys on `package.json`. Example: The file `.lint-staged.config.cjs` can be a `lint-staged` key on `package.json`.
