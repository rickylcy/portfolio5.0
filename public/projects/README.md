# Project screenshots

Store portfolio screenshots in folders named after the project id.

Recommended naming:

```text
public/projects/noodles-broadbeach/01-dashboard.png
public/projects/noodles-broadbeach/02-report-list.png
public/projects/noodles-broadbeach/03-roster.png
public/projects/visa-portal/01-home.png
public/projects/visa-portal/02-steps.png
```

Use lowercase folder names, hyphens between words, and numbered filenames so the order is obvious.

Then reference them from project data with an array:

```js
images: [
  "/projects/noodles-broadbeach/01-logo.png",
  "/projects/noodles-broadbeach/02-report-list.png",
  "/projects/noodles-broadbeach/03-roster.png",
];
```

Use `images` in `src/data/projects.js` and in the featured projects inside `src/components/client/PortfolioHomePage.jsx`.
Use `gallery` in `src/components/client/ProjectsPage.jsx`.
