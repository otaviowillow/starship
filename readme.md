# Starship Explorer

Starship Explorer is a web application that allows users to explore various starships from the Star Wars universe. It provides information about each starship, such as its name, manufacturer, hyperdrive rating, and passenger capacity. Users can also mark starships as favorites and add comments to their favorite starships.

## Features

- View a list of starships with their details.
- Mark starships as favorites.
- Add comments to favorite starships.
- Pagination support for browsing through multiple pages of starships.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Tailwind CSS: Utility-first CSS framework for styling the app.
- React Query: Library for handling data fetching and caching.
- TypeScript: Typed superset of JavaScript.
- Zustand: Lightweight state management with minimal setup.
- ESLint: Linting tool for maintaining code quality.
- Prettier: Code formatter for consistent code styling.

## Folder Structure

- `public/`: Public assets and the HTML template.
- `src/`: Source code of the application.
  - `api/`: FE services for fetching starship data.
  - `contexts/`: Contains the context providers for managing favorites and comments.
  - `models/`: Contains the TypeScript models for starship data.
  - `components/`: Contains React components that connect with the state used in the app.
  - `styled-components/`: Contains UI components that don't directly access state.
  - `pages/`: Contains groups of components.
- `App.tsx`: The root component of the application.
- `index.tsx`: The entry point of the application.

## Installation

```bash
yarn
```

Start the development server:

```bash
yarn run dev
```

## Acknowledgements

Star Wars data provided by SWAPI - The Star Wars API.
