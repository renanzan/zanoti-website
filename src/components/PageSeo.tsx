import { NextComponentType } from 'next';
import { NextSeo } from 'next-seo';

type PageSeoProps = {
	title?: string;
	description?: string;
}

const PageSeo: NextComponentType<{}, {}, PageSeoProps> = ({ title, description }) => (
	<NextSeo
		title={title ? `Renan Zanoti ― ${title}` : "Renan Zanoti"}
		description={description || "Sou desenvolvedor de software especializado em React, crio aplicações e páginas web do zero. Sou extremamente apaixonado pelo que faço!"}
		canonical="https://zanoti.dev"
		openGraph={{
			url: "https://zanoti.dev",
			site_name: "Renan Zanoti",
			title: "Renan Zanoti | Desenvolvedor Front-end",
			description: "Sou desenvolvedor de software especializado em React, crio aplicações e páginas web do zero. Sou extremamente apaixonado pelo que faço!",
			locale: "pt_BR",
			images: [{
				url: "/assets/favicon/favicon-196x196.png",
				width: 196,
				height: 196,
				alt: "Logo do site Renan Zanoti",
				type: "image/png"
			}]
		}} />
);

export default PageSeo;