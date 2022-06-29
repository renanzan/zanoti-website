interface NavLinks {
	label: string;
	pathname: string;
	layoutId: string;
}

export default [
	{
		label: "Início",
		pathname: "/"
	},
	// {
	// 	label: "Projetos",
	// 	pathname: "/projects"
	// },
	{
		label: "Blog",
		pathname: "/blog"
	}, {
		label: "Contato",
		pathname: "/contact"
	}
] as Array<NavLinks>;