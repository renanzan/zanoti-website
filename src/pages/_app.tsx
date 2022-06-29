import type { AppProps } from "next/app";
import { Fragment } from "react";
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
		</Fragment>
	);
}