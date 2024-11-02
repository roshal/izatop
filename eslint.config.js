
// @ts-check

const {FlatCompat} = require('@eslint/eslintrc')
const globals = require('globals')
const js = require('@eslint/js')
const stylistic = require('@stylistic/eslint-plugin')

/** @typedef {
	import('eslint').Linter.Config
} Config */

const eslintFlatCompat = new FlatCompat()

/** @type {
	Array<Config>
} */
const eslintConfigArray = module.exports = []

void eslintConfigArray.push({
	ignores: [
		'*',
	],
})

void eslintConfigArray.push({
	ignores: [
		'!app',
		'!source',
	],
})

void eslintConfigArray.push({
	ignores: [
		'!*.js',
	],
})

void eslintConfigArray.push({
	languageOptions: {
		globals: {
			...globals.browser,
			...globals.es5,
			...globals.node,
		},
		parserOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
		},
	},
})

void eslintConfigArray.push({
	linterOptions: {
		reportUnusedDisableDirectives: true,
	},
})

void eslintConfigArray.push({
	...js.configs.recommended,
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#possible-problems
	// recommended
	rules: {
		// https://eslint.org/docs/latest/rules/no-empty-pattern
		'no-empty-pattern': 'off',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#possible-problems
	// recommended
	rules: {
		// https://eslint.org/docs/latest/rules/no-dupe-keys
		'no-dupe-keys': 'warn',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#possible-problems
	// recommended
	rules: {
		// https://eslint.org/docs/latest/rules/no-constant-condition
		'no-constant-condition': ['warn', {
			checkLoops: false,
		}],
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	// recommended
	rules: {
		// https://eslint.org/docs/latest/rules/no-case-declarations
		'no-case-declarations': 'error',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	// recommended
	rules: {
		// https://eslint.org/docs/latest/rules/no-delete-var
		'no-delete-var': 'error',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	// recommended
	rules: {
		// https://eslint.org/docs/latest/rules/no-empty
		'no-empty': 'error',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	// recommended
	rules: {
		// https://eslint.org/docs/latest/rules/no-extra-boolean-cast
		'no-extra-boolean-cast': 'error',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	// recommended
	rules: {
		// https://eslint.org/docs/latest/rules/no-global-assign
		'no-global-assign': 'error',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	// recommended
	rules: {
		// https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
		'no-nonoctal-decimal-escape': 'error',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	// recommended
	rules: {
		// https://eslint.org/docs/latest/rules/no-octal
		'no-octal': 'error',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	// recommended
	rules: {
		// https://eslint.org/docs/latest/rules/no-redeclare
		'no-redeclare': 'error',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	// recommended
	rules: {
		// https://eslint.org/docs/latest/rules/no-regex-spaces
		'no-regex-spaces': 'error',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	// recommended
	rules: {
		// https://eslint.org/docs/latest/rules/no-shadow-restricted-names
		'no-shadow-restricted-names': 'error',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	// recommended
	rules: {
		// https://eslint.org/docs/latest/rules/no-unused-labels
		'no-unused-labels': 'error',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	// recommended
	rules: {
		// https://eslint.org/docs/latest/rules/no-useless-catch
		'no-useless-catch': 'error',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	// recommended
	rules: {
		// https://eslint.org/docs/latest/rules/no-useless-escape
		'no-useless-escape': 'error',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	// recommended
	rules: {
		// https://eslint.org/docs/latest/rules/no-with
		'no-with': 'error',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	// recommended
	rules: {
		// https://eslint.org/docs/latest/rules/require-yield
		'require-yield': 'error',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	rules: {
		// https://eslint.org/docs/latest/rules/curly
		'curly': 'error',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	rules: {
		// https://eslint.org/docs/latest/rules/require-await
		'require-await': 'error',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	rules: {
		// https://eslint.org/docs/latest/rules/arrow-body-style
		'arrow-body-style': ['error', 'always'],
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#suggestions
	rules: {
		// https://eslint.org/docs/latest/rules/object-shorthand
		'object-shorthand': ['error', 'always', {
			'avoidQuotes': true,
		}],
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#layout--formatting
	rules: {
		// https://eslint.org/docs/latest/rules/line-comment-position
		'line-comment-position': 'error',
	},
})

void eslintConfigArray.push({
	// https://eslint.org/docs/latest/rules/#layout--formatting
	rules: {
		// https://eslint.org/docs/latest/rules/unicode-bom
		'unicode-bom': 'error',
	},
})

void eslintConfigArray.push(...[
	// https://eslint.style/guide/config-presets#configuration-factory
	stylistic.configs.customize({
		flat: true,
		indent: 'tab',
		jsx: false,
	}),
])

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/function-call-spacing
		'@stylistic/function-call-spacing': 'error',
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/generator-star-spacing
		'@stylistic/generator-star-spacing': 'error',
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/implicit-arrow-linebreak
		'@stylistic/implicit-arrow-linebreak': 'error',
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/linebreak-style
		'@stylistic/linebreak-style': 'error',
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/lines-around-comment
		'@stylistic/lines-around-comment': 'error',
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/nonblock-statement-body-position
		'@stylistic/nonblock-statement-body-position': 'error',
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/object-curly-newline
		'@stylistic/object-curly-newline': 'error',
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/padding-line-between-statements
		'@stylistic/padding-line-between-statements': 'error',
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/semi-style
		'@stylistic/semi-style': 'error',
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/switch-colon-spacing
		'@stylistic/switch-colon-spacing': 'error',
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/multiline-ternary
		'@stylistic/multiline-ternary': 'off',
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/padded-blocks
		'@stylistic/padded-blocks': 'off',
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/function-paren-newline
		'@stylistic/function-paren-newline': ['error', 'consistent'],
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/object-curly-spacing
		'@stylistic/object-curly-spacing': ['error', 'never'],
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/space-before-function-paren
		'@stylistic/space-before-function-paren': ['error', 'always'],
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/brace-style
		'@stylistic/brace-style': ['error', '1tbs', {
			allowSingleLine: true,
		}],
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/indent
		'@stylistic/indent': ['error', 'tab', {
			flatTernaryExpressions: true,
		}],
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/max-len
		'@stylistic/max-len': ['warn', {
			comments: 80,
			ignoreComments: true,
			ignoreStrings: true,
			tabWidth: 2,
		}],
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/no-multiple-empty-lines
		'@stylistic/no-multiple-empty-lines': ['error', {
			max: 1,
			maxBOF: 1,
			maxEOF: 0,
		}],
	},
})

void eslintConfigArray.push({
	// layout
	rules: {
		// https://eslint.style/rules/default/operator-linebreak
		'@stylistic/operator-linebreak': ['error', 'before', {
			'overrides': {
				'=': 'after',
			},
		}],
	},
})

void eslintConfigArray.push({
	// suggestion
	rules: {
		// https://eslint.style/rules/default/quote-props
		'@stylistic/quote-props': 'off',
	},
})

void eslintConfigArray.push({
	// suggestion
	rules: {
		// https://eslint.style/rules/default/spaced-comment
		'@stylistic/spaced-comment': 'off',
	},
})

void eslintConfigArray.push(...[
	// https://typescript-eslint.io/linting/configs/#strict
	...eslintFlatCompat.extends('plugin:@typescript-eslint/strict'),
])

void eslintConfigArray.push(...[
	// https://typescript-eslint.io/linting/configs/#stylistic
	...eslintFlatCompat.extends('plugin:@typescript-eslint/stylistic'),
])

void eslintConfigArray.push({
	// https://typescript-eslint.io/rules/?=recommended
	rules: {
		// https://typescript-eslint.io/rules/no-empty-object-type
		'@typescript-eslint/no-empty-object-type': 'off',
	},
})

void eslintConfigArray.push({
	// https://typescript-eslint.io/rules/?=recommended
	rules: {
		// https://typescript-eslint.io/rules/no-explicit-any
		'@typescript-eslint/no-explicit-any': 'off',
	},
})

void eslintConfigArray.push({
	// https://typescript-eslint.io/rules/?=recommended
	rules: {
		// https://typescript-eslint.io/rules/no-require-imports
		'@typescript-eslint/no-require-imports': 'off',
	},
})

void eslintConfigArray.push({
	// https://typescript-eslint.io/rules/?=recommended
	rules: {
		// https://typescript-eslint.io/rules/no-var-requires
		'@typescript-eslint/no-var-requires': 'off',
	},
})

void eslintConfigArray.push({
	// https://typescript-eslint.io/rules/?=recommended
	rules: {
		// https://typescript-eslint.io/rules/prefer-function-type
		'@typescript-eslint/prefer-function-type': 'off',
	},
})

void eslintConfigArray.push({
	// https://typescript-eslint.io/rules/?=recommended
	rules: {
		// https://typescript-eslint.io/rules/ban-ts-comment
		'@typescript-eslint/ban-ts-comment': ['warn', {
			'ts-check': false,
			'ts-expect-error': false,
			'ts-ignore': true,
			'ts-nocheck': true,
			minimumDescriptionLength: 2,
		}],
	},
})

void eslintConfigArray.push({
	// https://typescript-eslint.io/rules/?=recommended-extension
	rules: {
		// https://typescript-eslint.io/rules/no-unused-vars
		'no-unused-vars': 'off', // eslint recommended
		'@typescript-eslint/no-unused-vars': ['warn', {
			args: 'after-used',
			ignoreRestSiblings: true,
		}],
	},
})

//eslintConfigArray.push({
//	// https://typescript-eslint.io/rules/?=recommended-typeInformation-extension
//	rules: {
//		// https://typescript-eslint.io/rules/require-await
//		//'require-await': 'off', // eslint
//		'@typescript-eslint/require-await': 'error',
//	},
//})

void eslintConfigArray.push({
	// https://typescript-eslint.io/rules/?=stylistic
	rules: {
		// https://typescript-eslint.io/rules/consistent-indexed-object-style
		'@typescript-eslint/consistent-indexed-object-style': 'off',
	},
})

void eslintConfigArray.push({
	// https://typescript-eslint.io/rules/?=stylistic
	rules: {
		// https://typescript-eslint.io/rules/no-empty-interface
		'@typescript-eslint/no-empty-interface': 'warn',
	},
})

void eslintConfigArray.push({
	// https://typescript-eslint.io/rules/?=stylistic
	rules: {
		// https://typescript-eslint.io/rules/consistent-type-definitions
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
	},
})

void eslintConfigArray.push({
	// https://typescript-eslint.io/rules/?=stylistic
	rules: {
		// https://typescript-eslint.io/rules/array-type
		'@typescript-eslint/array-type': ['error', {
			default: 'generic',
			readonly: 'generic',
		}],
	},
})

eslintConfigArray.push({
	// https://typescript-eslint.io/rules/?=strict
	rules: {
		'@typescript-eslint/no-extraneous-class': 'off',
	},
})

//eslintConfigArray.push({
//	// https://typescript-eslint.io/rules/?=strict-typeInformation
//	rules: {
//		'@typescript-eslint/no-confusing-void-expression': 'error',
//		'@typescript-eslint/no-meaningless-void-operator': 'error',
//	},
//})

//eslintConfigArray.push({
//	// https://typescript-eslint.io/rules/?=xrecommended-xstrict-xstylistic
//	rules: {
//		// https://typescript-eslint.io/rules/explicit-module-boundary-types
//		'@typescript-eslint/explicit-module-boundary-types': ['error', {
//			allowArgumentsExplicitlyTypedAsAny: true,
//		}],
//	},
//})

void eslintConfigArray.push({
	// https://typescript-eslint.io/rules/?=xrecommended-xstrict-xstylistic-extension
	rules: {
		// https://typescript-eslint.io/rules/no-use-before-define
		//'no-use-before-define': 'off', // eslint
		'@typescript-eslint/no-use-before-define': 'error',
	},
})

//eslintConfigArray.push({
//	// https://typescript-eslint.io/rules/?=xrecommended-xstrict-xstylistic-typeInformation
//	rules: {
//		'@typescript-eslint/promise-function-async': 'error',
//	},
//})

//eslintConfigArray.push({
//	// https://typescript-eslint.io/rules/?=xrecommended-xstrict-xstylistic-typeInformation
//	rules: {
//		// https://typescript-eslint.io/rules/return-await
//		//'no-return-await': 'off', // eslint deprecated
//		'@typescript-eslint/return-await': ['error', 'always'],
//	},
//})

void eslintConfigArray.push(...[
	// https://www.npmjs.com/package/eslint-plugin-import
	...eslintFlatCompat.extends('plugin:import/recommended'),
])

void eslintConfigArray.push(...[
	// https://www.npmjs.com/package/eslint-plugin-import
	...eslintFlatCompat.extends('plugin:import/typescript'),
])

void eslintConfigArray.push({
	settings: {
		// https://github.com/import-js/eslint-plugin-import#importparsers
		'import/parsers': {
			// https://github.com/import-js/eslint-plugin-import/issues/2556
			'espree': [
				'.cjs',
				'.js',
				'.jsx',
				'.mjs',
			],
		},
	},
})

void eslintConfigArray.push({
	settings: {
		// https://github.com/import-js/eslint-plugin-import#importresolver
		'import/resolver': {
			// https://github.com/import-js/eslint-import-resolver-typescript
			'typescript': {
				// orderly
				extensions: [
					'.ts',
					'.d.ts',
					'.js',
				],
			},
		},
	},
})

void eslintConfigArray.push({
	// https://github.com/import-js/eslint-plugin-import#static-analysis
	rules: {
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
		'import/no-unresolved': 'off',
	},
})

void eslintConfigArray.push({
	// https://github.com/import-js/eslint-plugin-import#static-analysis
	rules: {
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
		'import/namespace': ['error', {
			allowComputed: true,
		}],
	},
})

void eslintConfigArray.push({
	// https://github.com/import-js/eslint-plugin-import#style-guide
	rules: {
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
		'import/no-duplicates': 'off',
	},
})

void eslintConfigArray.push({
	// https://github.com/import-js/eslint-plugin-import#style-guide
	rules: {
		// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
		'import/order': ['error', {
			'groups': [
				['builtin'],
				['external'],
				['internal'],
				['parent'],
				['sibling'],
				['index'],
				['object'],
				['unknown'],
				['type'],
			],
			'newlines-between': 'always',
			'pathGroups': [
				{
					group: 'unknown',
					pattern: '*.sass',
					patternOptions: {
						matchBase: true,
					},
				},
			],
		}],
	},
})
