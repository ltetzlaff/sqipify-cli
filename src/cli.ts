#!/usr/bin/env node

import * as updateNotifier from "update-notifier"
import * as meow from "meow"
import m from "sqipify"

const cli = meow(`
  Usage
    $ sqipify <path|glob> ...
      or
    $ sqipify-cli <path|glob> ...
`)

const { input, pkg, flags } = cli

updateNotifier({ pkg }).notify()

if (input.length === 0) {
  console.error("No path given.")
  process.exit(1)
}

// Call module default export
m(input, flags)