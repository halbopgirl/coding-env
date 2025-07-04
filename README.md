# Package Sorter React App

This is a simple React app to sort packages into stacks (STANDARD, SPECIAL, REJECTED) based on their dimensions and mass, with internationalization (English/Spanish) support.

## How to Run the App

1. **Install dependencies**

   Open a terminal in the project directory and run:
   
   ```sh
   npm install
   ```

2. **Start the development server**

   ```sh
   npm start
   ```

   This will launch the app in your default browser at [http://localhost:3000](http://localhost:3000).

3. **Usage**
   - Enter the width, height, length (in cm), and mass (in kg) of your package.
   - Click "Sort Package" to see which stack the package belongs to.
   - The app will use the default language set in the code (English or Spanish). To change the language, edit the `lng` value in `src/i18n.js`.

## Running Unit Tests

To run the unit tests for the `sort` function and other components, use:

```sh
npm test
```

This will launch the test runner in interactive watch mode. You can see the results of the tests and get feedback as you make changes.

## Features
- Sorts packages as STANDARD, SPECIAL, or REJECTED based on rules.
- Internationalization (i18n) with English and Spanish translations.
- Simple, user-friendly form interface.

## Requirements
- Node.js and npm installed on your system.

## Available Scripts

In the project directory, you can run:

- `npm start` — Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
- `npm test` — Launches the test runner in interactive watch mode.
- `npm run build` — Builds the app for production to the `build` folder.
- `npm run eject` — Ejects the app for full configuration control (not reversible).

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). For more information, see the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
