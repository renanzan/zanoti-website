import { useEffect } from "react";
import { NextComponentType } from "next";

import { pageview } from "services/google-analytics";
import { useRouter } from "next/router";

type GAPageViewProps = {
	children: React.ReactElement;
}

const GAPageView: NextComponentType<{}, {}, GAPageViewProps> = ({ children }) => {
	const router = useRouter();

	useEffect(() => {
		function handleRouteChange(url: string) {
			pageview(url);
		}

		router.events.on("routeChangeComplete", handleRouteChange);

		return () => router.events.off("routeChangeComplete", handleRouteChange);
	}, [router]);

	return children;
}

export default GAPageView;