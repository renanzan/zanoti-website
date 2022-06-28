import { NextComponentType } from "next";
import SkillCard from "./SkillCard";

import * as S from "./styles";

const SkillsCardsList: NextComponentType = () => {
    return (
        <S.Root>
            <S.SkillsList>
                <SkillCard
                    title="Design"
                    description="Experiência com protótipos no Figma e em desenvolvimento de design systems"
                    icon="/assets/icons/figma.svg" />

                <SkillCard
                    title="Front-End"
                    description="Sou especialista em desenvolvimento React, escrevo código limpo e organizado"
                    icon="/assets/icons/code.svg" />

                <SkillCard
                    title="Testes"
                    description="Prática no desenvolvimento de testes unitários para componentes"
                    icon="/assets/icons/test.svg" />

                <SkillCard
                    title="SEO"
                    description="Impulsione sua página com SEO otimizado."
                    icon="/assets/icons/gps.svg" />
            </S.SkillsList>

            <S.ShowProjects>Veja os projetos que estive envolvido</S.ShowProjects>
        </S.Root>
    )
}

export default SkillsCardsList;