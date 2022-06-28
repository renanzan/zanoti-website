import styled from "styled-components";

type FloatingSphereParams = {
    x?: string;
    y?: string;
    z?: number;
}

export const Root = styled.div`
    position: relative;
`;

export const ShadowBall = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
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
`;

export const FloatingBlueSphere = styled(FloatingSphere)`
    background: #6ED2F2;
    padding: 0px;
    min-width: 12px;
    min-height: 12px;
`;