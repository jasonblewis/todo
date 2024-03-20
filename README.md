# basic sveltekit project to learn how to use lucia with sveltekit
based on https://github.com/edwardspresume/sveltekit-lucia-auth-v3-example

# to install
```
git clone https://github.com/jasonblewis/todo.git todo-test
cd todo-test
pnpm install
echo "DATABASE_URL='localDB/sqlite.db'" >> .env
mkdir -p localDB
pnpm db:generate
pnpm db:push
pnpm run dev
```

visit  http://localhost:5173/auth/register

note errors:
```
  VITE v5.1.6  ready in 1380 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
TypeError: Cannot read properties of undefined (reading 'defaults')
    at Module.superValidate (/home/jason/projects/svelteprojects/todo-test/node_modules/.pnpm/sveltekit-superforms@2.10.5_@sveltejs+kit@2.5.4_@types+json-schema@7.0.15_esbuild-runner@2.2._qjf2gblorr4dib6zfg2evsbvbm/node_modules/sveltekit-superforms/dist/superValidate.js:19:53)
    at load (/home/jason/projects/svelteprojects/todo-test/src/routes/auth/register/+page.server.ts:19:31)
    at Module.load_server_data (/home/jason/projects/svelteprojects/todo-test/node_modules/.pnpm/@sveltejs+kit@2.5.4_@sveltejs+vite-plugin-svelte@3.0.2_svelte@4.2.12_vite@5.1.6/node_modules/@sveltejs/kit/src/runtime/server/page/load_data.js:61:41)
    at /home/jason/projects/svelteprojects/todo-test/node_modules/.pnpm/@sveltejs+kit@2.5.4_@sveltejs+vite-plugin-svelte@3.0.2_svelte@4.2.12_vite@5.1.6/node_modules/@sveltejs/kit/src/runtime/server/page/index.js:140:19

```


# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
