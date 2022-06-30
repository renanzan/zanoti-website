import Layout from "components/Layout";
import ProjectCard from "components/ProjectCard";
import ProjectKderno from "components/ProjectCard/Projects/KdernoCard";
import ProjectClipping from "components/ProjectCard/Projects/ClippingCard";
import ProjectMentora from "components/ProjectCard/Projects/MentoraCard";

import * as S from "./styles";

const ProjectsTemplate = () => {
	return (
		<Layout
			title="Renan Zanoti ― Projetos"
			waterMarkSection="Projetos">
			<S.Root>
				<S.Content>
					<S.ProjectList>
						<ProjectCard
							tags={["react", "nextjs", "tailwindcss", "draftjs"]}>
							<ProjectKderno />
						</ProjectCard>

						{/* <ProjectCard
							tags={["react", "nextjs", "design system"]}>
							<ProjectClipping />
						</ProjectCard>

						<ProjectCard
							tags={["react", "nextjs"]}>
							<ProjectMentora />
						</ProjectCard> */}
					</S.ProjectList>
				</S.Content>
			</S.Root>
		</Layout>
	);
}

export default ProjectsTemplate;