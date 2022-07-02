import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const Root = styled.div.attrs({
	className: "relative w-[200px] aspect-square z-[1] pointer-events-none select-none lg:scale-[1.3]"
})``;

export const ShadowBall = styled.div.attrs({
	className: "absolute h-full aspect-square rounded-full top-[-15px] right-[-30px] z-[0] bg-gradient-to-b from-[#28292d]"
})``;

type FloatingSphereParams = {
	speed: string;
}

export const FloatingSphere = styled(motion.div).attrs<FloatingSphereParams>(({ speed }) => ({
	className: `absolute block bg-background min-h-[24px] h-fit w-fit aspect-square rounded-full p-4 shadow-md`,
	initial: { y: 10 },
	animate: { y: -10 },
	transition: { duration: speed, repeat: Infinity, repeatType: "reverse", easeInOut: true }
})) <FloatingSphereParams>``;

export const FloatingBlueSphere = styled(motion.div).attrs<FloatingSphereParams>(({ speed }) => ({
	className: "absolute block h-fit w-fit aspect-square rounded-full p-4 shadow-md min-h-[8px] bg-[#6ED2F2] p-0",
	initial: { y: 10 },
	animate: { y: -10 },
	transition: { duration: speed, repeat: Infinity, repeatType: "reverse", easeInOut: true }
})) <FloatingSphereParams>``;