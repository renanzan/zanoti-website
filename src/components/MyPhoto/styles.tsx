import styled, { keyframes } from "styled-components";

const floatAnimation = keyframes`
	0% { transform: translateY(0px); }
	40% { transform: translateY(10px); }
	50% { transform: translateY(10px); }
	100% { transform: translateY(-10px); }
`;

type FloatingSphereParams = {
	x?: string;
	y?: string;
	z?: number;
	speed: number;
}

export const Root = styled.div`
	position: relative;
	width: fit-content;
	align-self: center;
	min-width: 256px;
	aspect-ratio: 1/1;

	@media (max-width:450px) {
		min-width: 150px;
	}
`;

export const ShadowBall = styled.div`
	position: absolute;
	height: 100%;
	aspect-ratio: 1/1;
	border-radius: 50%;
	top: -20px;
	right: -40px;
	z-index: 0;
	background: linear-gradient(135deg, rgba(40, 41, 45, 0.8) 0%, rgba(40, 41, 45, 0) 100%);
`;

export const FloatingSphere = styled.div<FloatingSphereParams>`
	position: absolute;
	background: #25262A;
	min-width: 38px;
	min-height: 38px;
	border-radius: 50%;
	padding: 16px;
	box-shadow: 6px 0px 20px -4px rgba(0, 0, 0, 0.25);
	top: ${({ y }) => y};
	left: ${({ x }) => x};
	z-index: ${({ z }) => z};
	height: fit-content;
	width: fit-content;
	animation: ${floatAnimation} ${({ speed }) => `${speed}s`} ease-in-out infinite alternate;
	animation-delay: 1s;
`;

export const FloatingBlueSphere = styled(FloatingSphere)`
	background: #6ED2F2;
	padding: 0px;
	min-width: 12px;
	min-height: 12px;
`;