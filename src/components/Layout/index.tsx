import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { NextComponentType } from "next";
import Head from "next/head";

import useWindowSize, { WindowSize } from "hooks/useWindowSize";
import WaterMarkSection from "components/WaterMarkSection";

import * as S from "./styles";
import Header, { defaultHeaderConfig, HeaderConfig } from "./Header";
import Footer from "./Footer";

type ScrollWindow = {
	direction?: "up" | "down";
	scrollY?: number;
}

interface LayoutContext {
	window: {
		size: WindowSize;
		scroll?: ScrollWindow;
	};
	headerConfig: HeaderConfig;
	setHeaderConfig: Dispatch<SetStateAction<HeaderConfig>>;
	resetHeader: VoidFunction;
}

interface Props extends React.ParamHTMLAttributes<HTMLDivElement> {
	title?: string;
	waterMarkSection?: string;
	configHeader?: HeaderConfig
	children: React.ReactNode;
	style?: React.CSSProperties;
}

export const LayoutContext = createContext<LayoutContext>({} as LayoutContext);
export const useLayout = () => useContext(LayoutContext);

const Layout: NextComponentType<{}, {}, Props> = ({ title, waterMarkSection, children, ...rest }) => {
	const windowSize = useWindowSize();
	const [headerConfig, setHeaderConfig] = useState<HeaderConfig>(defaultHeaderConfig);
	const [scroll, setScroll] = useState<undefined | ScrollWindow>();

	function resetHeader() {
		setHeaderConfig(defaultHeaderConfig);
	}

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
		<LayoutContext.Provider value={{ window: { size: windowSize, scroll }, headerConfig, setHeaderConfig, resetHeader }}>
			<Head>
				<title>{title || "Renan Zanoti"}</title>
			</Head>

			<S.Root>
				<Header config={headerConfig} />

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