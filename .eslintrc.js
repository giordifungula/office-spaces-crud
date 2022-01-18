module.exports = {
	env: {
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'prettier', 'import'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',

		'no-unused-vars': [
			0,
			{ vars: 'all', args: 'after-used', ignoreRestSiblings: false },
		],

		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'interface',
				format: ['PascalCase'],
				custom: {
					regex: '^I[A-Z]',
					match: true,
				},
			},
		],
		'prettier/prettier': 'error',
		'import/extensions': 'off',
		'import/prefer-default-export': 'off',
		'import/no-unresolved': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'no-console': 'off',
		'import/order': [
			'error',
			{
				groups: [
					['builtin', 'external'],
					['internal', 'parent', 'sibling', 'index'],
				],
			},
		],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};
