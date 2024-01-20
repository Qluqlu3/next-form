module.exports = {
	parserOptions: {
		ecmaVersion: 2021, // 使用するECMAScriptのバージョン
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['next'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
	],
	rules: {
		'no-unused-vars': 'error',
		'react/prop-types': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
	},
};
