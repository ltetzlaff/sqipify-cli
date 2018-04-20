# sqipify-cli

[![Build Status](https://travis-ci.org/ltetzlaff/sqipify-cli.svg?branch=master)](https://travis-ci.org/ltetzlaff/sqipify-cli)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Install

```bash
npm i sqipify-cli -g
```

## Usage

```bash
sqipify --help
```

## Help

```
$ sqipify --help

  CLI for sqipify

  Usage
    $ sqipify <path|glob> ...
      or
    $ sqipify-cli <path|glob> ...

  Options
    --numberOfPrimitives, -n
        | (  5) Probably too few  |
        | ( 10) Few               |
        | ( 50) Medium            |
        | (500) Probably too many |
    --blur, -b     Apply Gaussian Blur Filter of this strength
        | ( 0) Off    |
        | ( 5) Medium |
        | (20) A lot  |
    --mode, -m     Which primitives to use
        | (0) Combo   | (1) Triangle       | (2) Rect        |
        | (3) Ellipse | (4) Circle         | (5) RotatedRect |
        | (6) Beziers | (7) RotatedEllipse | (8) Polygon     |
    --optimize     Wether to use SVG Optimizer (default: true)
    --outFile, -o  Output filename
```

## Setup (in ./)

### Install NodeJS

[Download](https://nodejs.org/en/download/current/)

### Fetch dependencies

```bash
npm install
```

## Dev (in ./)

Typescript builds are automatic and watch for file changes:
```bash
npm run build
```

or run this to build only once:
```bash
npm run buildOnce
```

Building, Linting, Formatting, Testing:
```bash
npm test
```

## Contribution

- use `git pull --rebase` in favor of regular pull, i recommend configuring it globally via:
  ```bash
  git config --global pull.rebase true
  ```
