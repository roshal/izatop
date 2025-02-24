
// @ts-check

/**
@typedef Scripts
@type {
	Record<string, string>
}
*/

const {assign} = Object

/**
@type {
	Scripts
}
*/
const packageScripts = exports.scripts = {}

/**
@type {
	(currentScripts: Scripts) => void
}
*/
const assignScripts = (
	currentScripts,
) => {

	void assign(
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
