# Master‑NES‑Styles
Responsive Style Framework - with "oldschool" NES & SNES look and feel.

Master‑NES‑Styles is a responsive CSS framework that combines the **8‑bit charm of NES.css** with the **16‑bit aesthetic of snes.css** and extends both with a flexible grid system, dark/light mode support and a handful of utility classes.  The framework integrates the [NES.icons](https://github.com/nostalgic-css/NES.icons) icon set and uses the [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) bitmap font for an authentic retro look.  It is designed to be mobile‑first, accessible and easy to customise.

## Motivation

Projects such as **NES.css** and **snes.css** deliver beautiful pixel‑art components but deliberately leave layout and responsiveness to the developer.  NES.css describes itself as a purely component library and notes that developers must “define your own layout”【33679825229190†L71-L97】.  Likewise, snes.css emphasises that it does not provide “layout styles or javascript code” so that it can be integrated into modern frameworks【564547201021749†L7-L20】.  Master‑NES‑Styles fills this gap by providing a responsive grid and utility system that feels native to these retro components while still following modern responsive design best practices such as mobile‑first breakpoints, flexible grids and media queries【346063349421293†L294-L333】.  The framework also implements optional light and dark themes and exposes Sass variables for extensive customisation.

## Features

### 🎮 Retro Aesthetic

- **NES‑inspired components** – The core styles import the latest [NES.css](https://github.com/nostalgic-css/NES.css) release.  NES.css is an 8‑bit‑style CSS framework maintained by [B.C.Rikko](https://github.com/BcRikko) and published under the MIT licence【33679825229190†L109-L113】.
- **SNES‑style palette** – A secondary theme layer imports [snes.css](https://github.com/devMiguelCarrero/snes.css) which is inspired by 16‑bit games and explicitly credits NES.css as a major influence【564547201021749†L7-L10】.  The SNES palette provides additional colour classes such as `text‑galaxy‑color`, `has‑plumber‑color` and more.
- **Pixel icons** – NES.icons supplies a set of 8‑bit icons (sword, controller, hearts, etc.).  The icons are distributed as CSS classes and can be used by including a single `<i class="nes-icon …"></i>` tag【462117573071139†L60-L67】.
- **Press Start 2P font** – Master‑NES‑Styles uses the Press Start 2P font for headings and titles.  The font’s licence is the [SIL Open Font License v1.1](http://scripts.sil.org/OFL)【602716252063485†L0-L7】 and the project authors credit *The Press Start 2P Project* for its creation.

### 📐 Responsive Grid

- **Flexible columns** – A 12‑column grid built with CSS Grid and Flexbox.  Use `.mn-row` to create a grid container and `.mn-col‑N` classes to define how many columns an element spans.  Breakpoint‑specific classes (e.g. `.mn-col‑md‑6`) allow a column to span different numbers of grid tracks at wider viewports.  The breakpoints use relative units as recommended in responsive design guides【346063349421293†L317-L324】.
- **Mobile‑first breakpoints** – Default styles assume mobile widths.  At `min-width: 576px`, `768px`, `992px` and `1200px` the layout can be adjusted using `.mn-col‑sm‑X`, `.mn-col‑md‑X`, `.mn-col‑lg‑X` and `.mn-col‑xl‑X` classes.
- **Containers and gutters** – `.mn-container` provides centred content with fluid widths.  Custom properties control gutter widths and grid gaps.
- **Utility classes** – Helpers such as `.mn-text-center`, `.mn-mt-2`, `.mn-px-3`, etc., provide quick spacing and alignment adjustments.

### 🌗 Dark and Light Modes

Many retro themes work best on dark backgrounds, but accessibility guidelines recommend providing a light option as well.  Master‑NES‑Styles implements two colour schemes using CSS custom properties.  Apply `data-theme="dark"` or `data-theme="light"` to the `<html>` element (or call the helper in `master-nes-styles.js`) to toggle between the two.  The theme variables control text colour, backgrounds, borders and accent highlights.

### 🛠️ Customisation

- **CSS Variables & Sass** – Core colours, spacing, typography and breakpoints are defined as custom properties (prefixed with `--mn-`).  If you are using Sass, copy the variables from `scss/_variables.scss` to override any value.
- **Modular build** – You can choose to import only the NES or SNES layers or exclude the optional JS.  The base CSS file uses `@import` statements for NES.css, NES.icons and snes.css so you don’t need to manage these dependencies separately.

## Installation

There are two ways to install Master‑NES‑Styles: via a package manager or directly from a CDN.

### Via npm/yarn

```
npm install master-nes-styles
# or
yarn add master-nes-styles
```

Then import the CSS into your application:

```js
// Using a bundler like Vite, Webpack or Parcel
import 'master-nes-styles/dist/master-nes-styles.css';
// Optional JS for theme toggling
import { loadTheme, toggleTheme } from 'master-nes-styles/dist/master-nes-styles.js';
```

### Via CDN

Add the following `<link>` and `<script>` tags to your HTML:

```html
<head>
  <!-- Press Start 2P font -->
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
  <!-- Master‑NES‑Styles bundle (includes NES.css, NES.icons and snes.css) -->
  <link href="https://unpkg.com/master-nes-styles@latest/dist/master-nes-styles.css" rel="stylesheet">
  <!-- Optional theme toggling helper -->
  <script src="https://unpkg.com/master-nes-styles@latest/dist/master-nes-styles.js"></script>
</head>
```

## Usage

### Basic grid

```html
<div class="mn-container">
  <div class="mn-row">
    <div class="mn-col-12 mn-col-md-6 mn-col-lg-4">
      <section class="nes-container">
        <h2 class="title">Welcome</h2>
        <p>This section spans the entire row on small screens, six columns on medium screens and four on large screens.</p>
      </section>
    </div>
    <div class="mn-col-12 mn-col-md-6 mn-col-lg-4">
      <section class="nes-container is-dark">
        <h2 class="title">Another block</h2>
        <p>Use NES.css containers, buttons and lists inside the grid.  Combine classes from NES.css and Master‑NES‑Styles freely.</p>
      </section>
    </div>
    <div class="mn-col-12 mn-col-md-12 mn-col-lg-4">
      <section class="snes-button has-galaxy-color">
        <i class="nes-icon coin"></i> SNES theme button
      </section>
    </div>
  </div>
</div>
```

### Light/dark toggle

To toggle between dark and light mode you can either add `data-theme="dark"` on the `<html>` element or call the helper provided by the optional JavaScript file:

```html
<html data-theme="light">
  <body>
    <button class="nes-btn is-primary" onclick="masterNES.toggleTheme()">Toggle theme</button>
    …
  </body>
</html>
```

In JavaScript:

```js
import { loadTheme, toggleTheme } from 'master-nes-styles';
// load previously saved theme from localStorage
loadTheme();
// later, toggle theme on user action
toggleTheme();
```

### SNES sub‑style

If you want to emphasise the SNES palette in a section, wrap it in the `.mn-snes` class.  This class overrides some colour variables with SNES equivalents and enables the SNES text and button colour classes provided by snes.css.

```html
<div class="mn-snes">
  <h3 class="text-galaxy-color">Super Section</h3>
  <button class="snes-button has-plumber-color">Jump!</button>
</div>
```

## Contributing

Contributions, bug reports and feature requests are welcome!  Please file an issue or submit a pull request.  When contributing code, be sure to follow current coding guidelines: use mobile‑first breakpoints, relative units, semantic HTML and provide accessible colour contrast in both dark and light modes【346063349421293†L294-L333】.  Unit tests should be added for any JavaScript helpers and new SCSS modules.

## Credits & Licence

Master‑NES‑Styles was created by Ernie.  It builds upon the work of several open‑source projects:

- **NES.css** – created by [B.C.Rikko](https://github.com/BcRikko); code and documentation copyright 2018 B.C.Rikko, released under the MIT License【33679825229190†L109-L113】.
- **NES.icons** – created by [Trezy](https://trezy.com); code and docs © 2019, released under the MIT License【462117573071139†L79-L82】.
- **snes.css** – created by [Miguel Carrero](https://github.com/devMiguelCarrero); code copyright 2024 Miguel Carrero, released under the MIT License【97576021553392†L0-L19】.  The framework draws inspiration from NES.css【564547201021749†L7-L10】.
- **Press Start 2P font** – created by *The Press Start 2P Project* (codeman38 et al.); licensed under the [SIL Open Font License 1.1]【602716252063485†L0-L7】.  See `font/LICENSE.txt` for full terms.

The code in this repository (CSS, JS, and documentation) is distributed under the [MIT License](LICENSE) unless stated otherwise.  See the `LICENSE` file for details.