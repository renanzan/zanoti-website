import Document, { Head, Html, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

class AppDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: [
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>,
				],
			};
		} finally {
			sheet.seal();
		}
	}

	render(): JSX.Element {
		return (
			<Html>
				<Head>
					<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="128x128" href="/assets/favicon/favicon-128x128.png" />
					<link rel="icon" type="image/png" sizes="152x152" href="/assets/favicon/favicon-152x152.png" />
					<link rel="icon" type="image/png" sizes="167x167" href="/assets/favicon/favicon-167x167.png" />
					<link rel="icon" type="image/png" sizes="180x180" href="/assets/favicon/favicon-180x180.png" />
					<link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon/favicon-192x192.png" />
					<link rel="icon" type="image/png" sizes="196x196" href="/assets/favicon/favicon-196x196.png" />
					<meta name="application-name" content="Renan Zanoti" />
					<meta name="msapplication-TileColor" content="#25262A" />
					<meta name="theme-color" content="#25262A" />
					<meta charSet="utf-8" />
				</Head>

				<body>
					<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-ML6PPR2"
						height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>

					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default AppDocument;