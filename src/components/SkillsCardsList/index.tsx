import { NextComponentType } from "next";
import Link from "next/link";

import SkillCard from "./SkillCard";
import * as S from "./styles";

const SkillsCardsList: NextComponentType = () => {
	return (
		<S.Root>
			<S.SkillsList>
				<SkillCard
					title="Design"
					description="Experiência com protótipos no Figma e no desenvolvimento de design systems"
					icon="/assets/icons/figma.svg" />

				<SkillCard
					title="Front-End"
					description="Especialista em desenvolvimento React, procuro sempre escrever código limpo e organizado"
					icon="/assets/icons/code.svg" />

				<SkillCard
					title="Testes"
					description="Prática no desenvolvimento de testes unitários para componentes"
					icon="/assets/icons/test.svg" />

				<SkillCard
					title="SEO"
					description="Prática na implementação de técnicas para otimizar SEO."
					icon="/assets/icons/gps.svg" />
			</S.SkillsList>

			<Link href="/projects" passHref>
				<a>
					<S.ShowProjects>Veja alguns projetos em que atuei</S.ShowProjects>
				</a>
			</Link>
		</S.Root>
	)
}

export default SkillsCardsList;