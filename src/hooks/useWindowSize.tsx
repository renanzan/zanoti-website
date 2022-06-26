import { useEffect, useState } from "react";

export interface WindowSize {
	height: number;
	width: number;
}

export default function useWindowSize(): WindowSize {
	const [windowSize, setWindowSize] = useState<WindowSize>({ width: 0, height: 0 });

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
}