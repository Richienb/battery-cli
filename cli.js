#!/usr/bin/env node

"use strict"

const chalk = require("chalk")
const meow = require("meow")
const toPercent = require("to-percent")
const battery = require("battery")

const getLevelColour = level => {
	if (level > 0.5) {
		return "greenBright"
	}

	if (level > 0.2) {
		return "yellowBright"
	}

	return "redBright"
}

meow(`
    Usage
      $ battery

    Examples
      $ battery
      ${chalk.greenBright("Charging")}, ${chalk.greenBright("100%")}
`)

module.exports = (async () => {
	const { level, charging } = await battery()

	console.log(`${charging ? chalk.greenBright("Charging") : chalk.redBright("Not charging")}, ${chalk[getLevelColour(level)](`${toPercent(level)}%`)}`)
})()
