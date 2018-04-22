#!/usr/bin/env node

import * as updateNotifier from "update-notifier"
import * as meow from "meow"
import { Job } from "./job"

const cli = meow(
  `
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
`,
  {
    flags: {
      numberOfPrimitives: {
        type: "string",
        alias: "n"
      },
      blur: {
        type: "string",
        alias: "b"
      },
      mode: {
        type: "string",
        alias: "m"
      },
      optimize: {
        type: "boolean"
      },
      outFile: {
        type: "string",
        alias: "o"
      }
    }
  }
)

const { input, pkg, flags } = cli

updateNotifier({ pkg }).notify()

if (input.length === 0) {
  console.error("No input path given.")
  process.exit(1)
}

// Call module default export
const {
  numberOfPrimitives = "10",
  blur = "5",
  mode = "0",
  optimize = true,

  outFile = "_sqip.svg"
} = flags

const n = Number(numberOfPrimitives)
const b = Number(blur)
const m = Number(mode)
const jobs = input.map(i => new Job(i, n, b, m, optimize, i + outFile))

Promise.all(jobs.map(async j => j.run())).then(() =>
  console.log(`Completed ${jobs.length} Jobs`)
)
