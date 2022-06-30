import { NextComponentType } from "next";

import { useLayout } from "components/Layout";
import SimplifiedHeaderVariants from "./Simplified";
import MobileHeaderVariants from "./Mobile";
import DefaultHeaderVariants from "./Default";

type HeaderVariantsProps = {
	children: React.ReactElement;
};

const HeaderVariants: NextComponentType<{}, {}, HeaderVariantsProps> = ({ children }) => {
	const { headerConfig, window } = useLayout();

	if (headerConfig.simplified)
		return (
			<SimplifiedHeaderVariants>
				{children}
			</SimplifiedHeaderVariants>
		);

	if (window.size.width < 600)
		return (
			<MobileHeaderVariants>
				{children}
			</MobileHeaderVariants>
		);

	return (
		<DefaultHeaderVariants>
			{children}
		</DefaultHeaderVariants>
	);
}

export default HeaderVariants;