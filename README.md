# Ala Eddine Berrahal — Research Portfolio

**[Visit the portfolio](https://alaberrahal.github.io) · [Version française](https://alaberrahal.github.io/fr/) · [GitHub profile](https://github.com/AlaBerrahal)**

A bilingual research portfolio presenting my background in **applied mathematics, biostatistics, machine learning and probabilistic modelling**.

## Content

- Current position: Data Scientist, Université Clermont Auvergne, UMR 454 MEDiS, since November 2026.
- INRAE internship: longitudinal metabolomics, mixed models / LMMS, multivariate analysis and clustering (2026).
- LOCIE internship: probabilistic modelling of building energy performance (2025).
- Methods, education and professional contact links.

Research summaries describe my experience. This website does not contain the original research datasets or analysis notebooks. The related [poem](https://github.com/AlaBerrahal/poem) repository is a fork of [srouchier/poem](https://github.com/srouchier/poem); this portfolio links to it without incorporating or changing its files.

## Website

Static HTML, CSS, JavaScript and original SVG artwork. No build step, third-party JavaScript, analytics, tracking or external fonts. Both language versions are usable without JavaScript; JavaScript adds a compact mobile menu and section highlighting.

```text
index.html            English version
fr/index.html         French version
assets/style.css      Responsive styles and print layout
assets/main.js        Mobile navigation and section highlighting
assets/               Vector artwork, icons and social preview
404.html              Custom not-found page
robots.txt            Crawler instructions
sitemap.xml           Public language versions
.nojekyll             Serve the static files directly
```

### Preview locally

From the repository root, with Python 3 installed:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`. No packages need to be installed.

### Publishing

GitHub Pages serves the `main` branch from `/ (root)`. Changes to the static files are published through GitHub Pages after a successful deployment.

### Editing

Update `index.html` and `fr/index.html` together when changing the biography, role or research summaries. Update both READMEs in the [profile repository](https://github.com/AlaBerrahal/AlaBerrahal) for corresponding profile changes.

## En français

Portfolio bilingue présentant mon parcours en mathématiques appliquées, biostatistiques, machine learning et modélisation probabiliste. Les synthèses de recherche ne contiennent ni données biologiques ni notebooks d’analyse originaux. Le site est statique, responsive et dispose d’une mise en page pour l’impression.
