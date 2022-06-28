import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { NextComponentType } from "next";
import Head from "next/head";

import useWindowSize, { WindowSize } from "hooks/useWindowSize";
import WaterMarkSection from "components/WaterMarkSection";
import Header from "./Header";

import * as S from "./styles";
import Footer from "./Footer";

type HeaderCustom = {
	logo: {
		primary: string;
		secondary: string;
	}
}

type ScrollWindow = {
	direction?: "up" | "down";
	scrollY?: number;
}

interface LayoutContext {
	header?: HeaderCustom;
	window: {
		size: WindowSize;
		scroll?: ScrollWindow;
	};
	setHeader: Dispatch<SetStateAction<HeaderCustom | undefined>>;
}

interface Props extends React.ParamHTMLAttributes<HTMLDivElement> {
	title?: string;
	waterMarkSection?: string;
	children: React.ReactNode;
	style?: React.CSSProperties;
}

export const LayoutContext = createContext<LayoutContext>({} as LayoutContext);
export const useLayout = () => useContext(LayoutContext);

const Layout: NextComponentType<{}, {}, Props> = ({ title, waterMarkSection, children, ...rest }) => {
	const windowSize = useWindowSize();
	const [header, setHeader] = useState<undefined | HeaderCustom>();
	const [scroll, setScroll] = useState<undefined | ScrollWindow>();

	useEffect(() => {
		let prevScroll: any = null;

		function onScroll(e: any) {
			const scrollY = e.currentTarget.scrollY;

			setScroll({
				direction: (prevScroll > scrollY) ? "up" : "down",
				scrollY
			});

			prevScroll = e.currentTarget.scrollY;
		}

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<LayoutContext.Provider value={{ header, window: { size: windowSize, scroll }, setHeader }}>
			<Head>
				<title>{title || "Renan Zanoti"}</title>
			</Head>
			
			<S.Root>
				<Header />

				{waterMarkSection && (
					<WaterMarkSection>{waterMarkSection}</WaterMarkSection>
				)}

				<S.Main {...rest}>
					{children}
				</S.Main>

				<Footer />
			</S.Root>
		</LayoutContext.Provider>
	);
}

export default Layout;