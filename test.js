const test = require("ava")
const execa = require("execa")

test("main", async t => {
	const { stdout } = await execa("./cli.js")
	t.is(typeof stdout, "string")
})
