module.exports = {
	images: {
		domains: ["res.cloudinary.com"]
	},
	async redirects() {
		return [
			{
				source: "/kderno",
				destination: "/projects?current=kderno",
				permanent: true
			},
			{
				source: "/clipping",
				destination: "/projects?current=clipping",
				permanent: true
			},
			{
				source: "/mentora",
				destination: "/projects?current=mentora",
				permanent: true
			}
		]
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			loader: '@svgr/webpack',
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [
						{
							name: 'preset-default',
							params: {
								overrides: { removeViewBox: false },
							},
						},
					],
				},
				titleProp: true,
			},
		});

		return config;
	}
}