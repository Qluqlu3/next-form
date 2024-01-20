/** @type {import('next').NextConfig} */
module.exports = {
	distDir: 'build',
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.module.rules.unshift({
				test: /\.(js|mjs|jsx|ts|tsx)$/,
				use: {
					loader: 'swc-loader',
				},
			});
		}
		return config;
	},
};
