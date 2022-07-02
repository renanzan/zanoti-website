import { NextComponentType } from "next";
import Link from "next/link";
import Image from "next/image";
import { useLottie } from "lottie-react";

import Layout from "components/Layout";
import SkillsCardsList from "components/SkillsCardsList";
import ContactForm from "components/ContactForm";
import * as animationData from "@public/assets/animations/scroll-down-animation.json";

import * as S from "./styles";
import MyPhoto from "components/MyPhoto";
import { ConnectParticles } from "components/ConnectParticles";

const HomeTemplate: NextComponentType = () => {
	const { View: ScrollAnimation } = useLottie({ animationData, loop: true });

	return (
		<Layout>
			<S.Cover>
				<S.CoverInfoContainer>
					<S.Badge>Front-End Developer</S.Badge>

					<h1 className="font-bold text-[32px] mt-4 font-roboto md:text-[48px]">Renan Zanoti.</h1>

					<p className="text-white-600 font-roboto text-base">Sou desenvolvedor de software especializado em React, crio aplicações e páginas web do zero. Sou extremamente apaixonado pelo que faço!</p>

					<Link href="/contact" passHref>
						<a className="text-primary mt-12 pb-6 font-roboto-mono">
							Vamos criar algo incrível juntos?
						</a>
					</Link>
				</S.CoverInfoContainer>

				<MyPhoto />

				<S.ScrollDownAnimationContainer>
					{ScrollAnimation}
				</S.ScrollDownAnimationContainer>

				<ConnectParticles />
			</S.Cover>

			{/* <S.Content>
				<S.Introduction>
					<SkillsCardsList />

					<S.IntroductionSection>
						<span>Introdução</span>

						<S.IntroductionTitle>Olá! Meu nome é Renan Zanoti</S.IntroductionTitle>

						<S.Quote>"Quando te oferecem uma assento em um foguete, você não pergunta qual assento. Você simplesmente embarca."</S.Quote>

						<S.IntroductionDescription>
							{`Sou profissional de front-end, possuo quase 4 anos de experiência na área. Durante esse tempo trabalhei com diversas tecnologias e busquei me aperfeiçoar no desenvolvimento de páginas e aplicações web, atualmente me especializo em ReactJS. Extremamente apaixonado pelo que faço, estou sempre em busca de aperfeiçoamento e desenvolvimento técnico e pessoal.
                            
														Além do conhecimento técnico, possuo como qualidades, organização e perfeccionismo, o que me permite criar interfaces intuitivas e de fácil usabilidade ao usuário final. Gosto de manter o código limpo e bem documentado, e sempre procuro a melhor maneira de resolver um problema.
								
								Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:`}
						</S.IntroductionDescription>

						<S.TechList>
							<li>JavaScript (ES6+)</li>
							<li>React</li>
							<li>Node.js</li>
							<li>TypeScript</li>
							<li>NextJS</li>
							<li>Storybook</li>
						</S.TechList>
					</S.IntroductionSection>
				</S.Introduction>

				<S.ListOfCompanies>
					<Image src="/assets/icons/whitescale-kderno-logo.svg" height="50px" width="150px" />
					<Image src="/assets/icons/whitescale-clipping-logo.svg" height="50px" width="150px" />
					<Image src="/assets/icons/whitescale-mentora-logo.svg" height="50px" width="150px" />
				</S.ListOfCompanies>

				<ContactForm />
			</S.Content> */}
		</Layout>
	);
}

export default HomeTemplate;