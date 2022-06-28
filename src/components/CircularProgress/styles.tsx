import styled, { css, keyframes } from "styled-components";

interface RootProps {
	size?: number;
}

interface CircularChartProps {
	indeterminate?: boolean;
}

interface CircleProps {
	percentage?: number;
}

const Progress = keyframes`
	0% { stroke-dasharray: 0, 100; }
`;

const Indeterminate = keyframes`
	0% { stroke-dasharray: 50, 100; }
	100% { stroke-dasharray: 0, 100; }
`;

const Rotation = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
`;

export const Root = styled.div<RootProps>`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${({ size }) => size ? size : "24"}px;
	width: ${({ size }) => size ? size : "24"}px;

	& > span {
		position: absolute;
		font-size: "18px";
		font-weight: 700;

		&:after {
			content: "%"
		}
	}
`;

export const CircularChart = styled.svg.attrs({
	viewBox: "0 0 36 36"
}) <CircularChartProps>`
	display: block;
	margin: 10px auto;
	max-height: 250px;
	fill: var(--primary);

	${({ indeterminate }) => indeterminate && css`
		animation: ${Rotation} 1s linear infinite;
	`}
`;

export const Circle = styled.path.attrs({
	d: `M18 2.0845
		a 15.9155 15.9155 0 0 1 0 31.831
		a 15.9155 15.9155 0 0 1 0 -31.831`
}) <CircleProps>`
	stroke: var(--primary);
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;

	${({ percentage }) => (typeof percentage === "number") || percentage ? css`
		stroke-dasharray: ${percentage}, 100;
		animation: ${Progress} 500ms ease-out forwards;
	` : css`
		animation: ${Indeterminate} 1s linear infinite alternate-reverse;
	`}
`;