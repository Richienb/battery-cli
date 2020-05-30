#!/usr/bin/env node

"use strict"

const chalk = require("chalk")
const meow = require("meow")
const battery = require("battery")

meow(`
    Usage
      $ battery

    Examples
      $ battery
      Charging, 100%
`)

module.exports = (async () => {
	const { level, charging } = await battery()

	let levelColour = "redBright"

	if (level > 0.5) {
		levelColour = "greenBright"
	} else if (level > 0.3) {
		levelColour = "yellowBright"
	} else if (level > 0.15) {
		levelColour = "orangeBright"
	}

	console.log(`${charging ? chalk.greenBright("Charging") : chalk.redBright("Not charging")}, ${chalk[levelColour](`${level * 100}%`)}`)
})()
