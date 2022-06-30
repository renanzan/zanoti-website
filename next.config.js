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
	}
}