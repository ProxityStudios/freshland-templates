module.exports = {
	extends: [
		'airbnb-base',
		'plugin:import/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:promise/recommended',
		'plugin:unicorn/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['eslint-comments', 'promise', 'unicorn'],
	env: {
		node: true,
	},
	root: true,
	rules: {
		'no-prototype-builtins': 'off',
		'import/prefer-default-export': 'off',
		'import/no-default-export': 'off',
		'no-use-before-define': [
			'error',
			{ functions: false, classes: true, variables: true },
		],
		'unicorn/prevent-abbreviations': 'off',
		'unicorn/no-array-for-each': 'off',
		'import/no-extraneous-dependencies': 'off',
		'unicorn/prefer-module': 'off',
	},
};
