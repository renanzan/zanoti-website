import { NextComponentType } from "next";

import * as S from "./styles";

type ProjectCardProps = {
	children: React.ReactElement;
	tags: Array<string>;
}

const ProjectCard: NextComponentType<{}, {}, ProjectCardProps> = ({ children, tags }) => {
	return (
		<S.ProjectCardItem>
			<S.Content>
				{children}
			</S.Content>

			<S.TagList>
				{tags.map((tag, idx) => (
					<S.Tag key={idx}>{tag}</S.Tag>
				))}
			</S.TagList>
		</S.ProjectCardItem>
	)
}

export default ProjectCard;