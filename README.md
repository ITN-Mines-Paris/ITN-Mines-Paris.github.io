# Institut des Transformations numériques

A web site built with [Astro](https://astro.build/) & [Astroship](https://astro.build/themes/details/astroship/).

## Live Web Site

[![https://itn.dev](https://itn.dev/ITN-preview.png)](https://itn.dev)

## Installation

You can work on the project in the cloud (preferred method) or locally 
(if you know what you're doing).

### 0. Prerequisites

To work in the cloud, you need a [GitHub account](https://github.com/) 
to get (a 60-hour a month free) access to [GitHub Codespaces](https://github.com/features/codespaces).

To work locally, you need to install:

  - [Git](https://git-scm.com/),

  - [Node.js](https://nodejs.org/en/) ; 
    we suggest that you use the latest LTS version,

### 1. Clone the repository

In the cloud, [create a new Codespace](https://codespaces.new/boisgera/itn-web). Alternatively, to work locally, clone the repo:

```bash
git clone git@github.com:boisgera/itn-web.git
```

### 2. Install Dependencies

Codespace should automatically install your dependencies. If you work locally, type:

```bash
npm install
```

### 3. Start a Web Server

The command

```bash
npm run dev
```

starts a Web development server. In Codespaces it will also prompt you to open a browser window (locally, you are on your own). In both cases, each time you save a file, the browser will reload the site so that you can immediately see the effect of your changes.

You are now ready to start working on the project.

### 4. Development cycle

  - Synchronize: download the most recent version of the project files   
    (`git pull` locally), 

  - Edit the files, then commit your changes  
    (`git add` + `git commit` locally),
  
  - Synchronize: upload these changes to the project repository   
    (`git push` locally).



## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── ...
├── src/
│   ├── assets/
│   │   └── ...
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
```

Astro looks for `.astro`,`.md` or `.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Static assets can be placed in the `public/` directory. Images placed in 
the `assets/directory` are optimized and served as static assets.

Refer to [Astro documentation](https://docs.astro.build/getting-started) for more information.
