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

					<h1>Renan Zanoti.</h1>

					<p>Sou desenvolvedor de software especializado em React, crio aplicações e páginas web do zero. Sou extremamente apaixonado pelo que faço!</p>

					<Link href="/contact" passHref><a>Vamos criar algo incrível juntos?</a></Link>
				</S.CoverInfoContainer>

				<MyPhoto />

				<S.ScrollDownAnimationContainer>
					{ScrollAnimation}
				</S.ScrollDownAnimationContainer>

				<ConnectParticles />
			</S.Cover>

			<S.Content>
				<S.Introduction>
					<SkillsCardsList />

					<S.IntroductionSection>
						<span>Introdução</span>

						<S.IntroductionTitle>Olá! Meu nome é Renan Zanoti</S.IntroductionTitle>

						<S.Quote>Quando te oferecem uma assento em um foguete, você não pergunta qual assento. Você simplesmente embarca.</S.Quote>

						<S.IntroductionDescription>
							{`Sou profissional de Front-End e atualmente me especializo em ReactJS. Sou extremamente apaixonado pelo que faço e estou sempre buscando me aperfeiçoar. Tenho experiência na criação de aplicações e páginas web complexas do zero, bem como no manutenção e melhorias de aplicativos web.
                            
								Sou detalhista e organizado, procuro sempre criar interfaces extremamente intuitivas e de fácil usabilidade. Gosto de manter o código limpo e bem documentado, e sempre procuro a melhor maneira de resolver um problema.
								
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
			</S.Content>
		</Layout>
	);
}

export default HomeTemplate;