import type { AppProps } from "next/app";
import Script from "next/script";

import "../../public/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Component {...pageProps} />
	);
}