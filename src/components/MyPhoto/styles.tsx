import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

export const Root = styled.div.attrs({
	className: "relative h-[200px] w-[200px] aspect-square z-[1] self-center pointer-events-none select-none md:scale-[1.3]"
})``;

export const Photo = styled(Image).attrs({
	src: "/assets/images/photo.png",
	layout: "fill",
	className: "relative z-[2]",
	quality: 100,
	priority: true
})``;

export const ShadowBall = styled.div.attrs({
	className: "absolute h-full aspect-square rounded-full top-[-15px] right-[-30px] z-[0] bg-gradient-to-b from-[#28292d]"
})``;

type FloatingSphereParams = {
	speed: string;
}

export const FloatingSphere = styled(motion.span).attrs<FloatingSphereParams>(({ speed }) => ({
	className: `absolute flex items-center justify-center bg-background aspect-square rounded-full shadow-md p-4`,
	initial: { y: 10 },
	animate: { y: -10 },
	transition: { duration: speed, repeat: Infinity, repeatType: "reverse", easeInOut: true }
})) <FloatingSphereParams>``;