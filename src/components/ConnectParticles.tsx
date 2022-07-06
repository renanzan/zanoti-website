import React, { Fragment, useState } from "react";
import Particles from "react-tsparticles";
import type { Engine, IOptions, RecursivePartial } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export function ConnectParticles() {
	const [render, setRender] = useState(true);

	function onMount() {
		const wrapper = document.getElementById("tsparticles") as HTMLDivElement;
		const canvas = wrapper?.children[0] as HTMLCanvasElement;

		if (!canvas)
			return setRender(false);

		wrapper.style.position = "absolute";
		wrapper.style.inset = "0px";
		wrapper.style.zIndex = "0";
		canvas.style.position = "absolute";
		canvas.style.inset = "0px";
	}

	async function particlesInit(engine: Engine) {
		await loadFull(engine);

		setTimeout(() => {
			onMount();
		}, 100);
	};

	// https://codesandbox.io/s/iznee?file=/configs/tsParticles.js:31-948
	const options: RecursivePartial<IOptions> = {
		fpsLimit: 60,
		interactivity: {
			detectsOn: "canvas",
			events: {
				onClick: { enable: true, mode: "repulse" },
				onHover: { enable: true, mode: "repulse" },
				resize: true
			},
			modes: {
				repulse: { distance: 100, duration: 1 },
			},
		},
		particles: {
			color: { value: "#ffffff" },
			links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.02, width: 1 },
			move: {
				bounce: false,
				direction: "none",
				enable: true,
				outMode: "bounce",
				random: false,
				speed: 0.5,
				straight: false
			},
			number: { density: { enable: true, value_area: 800 }, value: 40 },
			opacity: { value: 0.05 },
			shape: { type: "circle" },
			size: { random: true, value: 5 },
		},
		detectRetina: true
	};

	if (!render)
		return (
			<Fragment />
		);

	return (
		<Particles
			id="tsparticles"
			options={options}
			init={particlesInit} />
	);
}