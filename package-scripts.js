
// @ts-check

/** @typedef {
	Record<string, string>
} Scripts */

/** @type {
	Scripts
} */
const packageScripts = exports.scripts = {}

/** @type {
	(minorScripts: Scripts) => void
} */
const assignScripts = (
	currentScripts,
) => {

	void Object.assign(
		packageScripts,
		currentScripts,
	)

}

void assignScripts({
	'eslint': 'eslint --cache --cache-strategy content -- source',
})

void assignScripts({
	'build': 'tsc',
})

void assignScripts({
	'check': 'tsc --noEmit',
})

void assignScripts({
	'lint': 'eslint --cache -- source',
})

void assignScripts({
	'test': 'npx -- tsx --test source/index.test.ts',
})
