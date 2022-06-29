import type { AppProps } from "next/app";
import { Fragment } from "react";
import Script from "next/script";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "../../public/styles/globals.css";
import GAPageView from "components/GAPageView";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<Script
				strategy="lazyOnload"
				id="google-tag-manager-script">
				{`
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-ML6PPR2');
					`}
			</Script>

			<GAPageView>
				<Component {...pageProps} />
			</GAPageView>

			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar
				closeOnClick
				pauseOnFocusLoss
				draggable
				pauseOnHover />
		</Fragment>
	);
}