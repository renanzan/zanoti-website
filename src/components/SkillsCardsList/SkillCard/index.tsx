import { NextComponentType } from "next";
import Image from "next/image";

import * as S from "./styles";

type SkillCardProps = {
	title: string;
	description: string;
	icon: string;
}

const SkillCard: NextComponentType<{}, {}, SkillCardProps> = ({ title, description, icon }) => {
	return (
		<S.Root>
			<S.Title>{title}</S.Title>
			<S.Description>{description}</S.Description>

			<S.Icon>
				<Image src={icon} layout="fill" />
			</S.Icon>
		</S.Root>
	);
}

export default SkillCard;