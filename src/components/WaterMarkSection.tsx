import { NextComponentType } from "next";
import styled from "styled-components";

type WaterMarkSectionProps = {
    children: string;
}

const WaterMark = styled.h1`
    position: absolute;
    top: 0px;
    right: 70px;
    margin: 40px 0px 0px 0px;
    font-family: 'Roboto', sans-serif;
    font-size: 350px;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.05);
    pointer-events: none;
    user-select: none;
    z-index: 0;
`;

const WaterMarkSection: NextComponentType<{}, {}, WaterMarkSectionProps> = ({ children }) => {
    return (
        <WaterMark>{children}</WaterMark>
    )
}

export default WaterMarkSection;