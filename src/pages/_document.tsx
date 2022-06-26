import Document, { Head, Html, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<Record<string, unknown> & { html: string }> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
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
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;