import type { AppProps } from "next/app";
import { Fragment } from "react";
import Script from "next/script";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "../../public/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<Component {...pageProps} />

			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar
				closeOnClick
				pauseOnFocusLoss
				draggable
				pauseOnHover />

			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=G-3WYVWTWSKD`} />

			<Script
				strategy="lazyOnload"
				id="google-analytics">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-3WYVWTWSKD', {
					page_path: window.location.pathname,
					});
				`}
			</Script>
		</Fragment>
	);
}