module.exports = {
	env: {
		browser: true,
	},
	extends: [
    'react-app',
    'react-app/jest',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
		'max-len': ["error", { "code": 100 }],
		'react/no-unknown-property': ['error', { ignore: ['class'] }],
		'react/prop-types': 0,
		'react/display-name': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
		'@typescript-eslint/ban-ts-ignore': 0,
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-empty-interface': 1,
	}
};
