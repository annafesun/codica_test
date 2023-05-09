# Codica weather app

### Deployed project

Click here to open project - [https://annafesun.github.io/codica_test](https://annafesun.github.io/codica_test)

### Requirements

---

- node
- yarn

### Install application

---

```bash
git clone repo
yarn install # install node dependencies locally
yarn husky-install # install husky & create folder(automatically)
npx husky add .husky/pre-commit "yarn lint-staged" # add a pre-commit hook
```

---

### Launch the application

```bash
yarn start #Runs the app in the development mode.
```

Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Additional commands

---

```bash
yarn lint #Fix esling issues if its capable, prettify code corresponding to .prettierrc.js
```
