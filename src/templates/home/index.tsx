import { NextComponentType } from "next";

import Layout from "components/Layout";

import * as S from "./styles";
import MyPhoto from "components/MyPhoto";
import SkillsCardsList from "components/SkillsCardsList";
import ContactForm from "components/ContactForm";

const HomeTemplate: NextComponentType = () => {
    return (
        <Layout>
            <S.Cover>
                <S.CoverInfoContainer>
                    <S.Badge>Front-End Developer</S.Badge>

                    <h1>Renan Zanoti.</h1>

                    <p>Sou desenvolvedor de software especializado em React, crio aplicações e páginas web do zero. Sou extremamente apaixonado pelo que faço!</p>

                    <a href="#">Vamos criar algo incrível juntos?</a>
                </S.CoverInfoContainer>

                <MyPhoto />
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
                    <img src="/assets/icons/mentora-logo.svg" />
                    <img src="/assets/icons/clipping-logo.svg" />
                    <img src="/assets/icons/kderno-logo.svg" />
                </S.ListOfCompanies>

                {/* <ContactForm /> */}
            </S.Content>
        </Layout>
    );
}

export default HomeTemplate;