import type { NextPage } from "next";
import { Fragment } from "react";

import PageSeo from "components/PageSeo";
import ProjectsTemplate from "templates/projects";

const ProjectsPage: NextPage = () => {
	return (
		<Fragment>
			<PageSeo
				title="Projetos"
				description="Projetos em que o desenvolvedor front-end Renan Zanoti trabalhou." />

			<ProjectsTemplate />
		</Fragment>
	)
}


export default ProjectsPage;