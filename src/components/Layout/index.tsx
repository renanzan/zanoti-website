import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { NextComponentType } from "next";

import useWindowSize, { WindowSize } from "hooks/useWindowSize";
import Header from "./Header";
import * as S from "./styles";

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
	children: React.ReactNode;
}

export const LayoutContext = createContext<LayoutContext>({} as LayoutContext);
export const useLayout = () => useContext(LayoutContext);

const Layout: NextComponentType<{}, {}, Props> = ({ children, ...rest }) => {
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
			<S.Root>
				<Header />

				<S.Main {...rest}>
					{children}
				</S.Main>
			</S.Root>
		</LayoutContext.Provider>
	);
}

export default Layout;