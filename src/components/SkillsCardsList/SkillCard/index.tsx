import { NextComponentType } from "next";

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

            <S.Icon src={icon} />
        </S.Root>
    );
}

export default SkillCard;