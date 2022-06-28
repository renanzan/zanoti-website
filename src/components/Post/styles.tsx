import styled from "styled-components";

export const Root = styled.a.attrs({
    target: "_blank"
})`
    display: flex;
    flex-direction: column;
    padding: 24px;
    max-width: 433px;
    background: #2D2E32;
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    box-shadow: 0px 30px 40px -5px rgba(0, 0, 0, 0.15);
    user-select: none;
    cursor: pointer;

    > * {
        pointer-events: none;
    }

    :hover {
        > h2 {
            text-decoration: underline;
        }
    }
`;

export const Title = styled.h2`
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
    margin: 0px;
`;

export const Description = styled.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 135.02%;
    opacity: 0.85;
    margin: 16px 0px 20px 0px;
`;

export const CoverImage = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 2.381/1;
    max-height: 250px;
    align-self: center;
    margin-top: 20px;
`;

export const Divisor = styled.hr`
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
    margin: 40px 0px 16px 0px;
`;

export const TagList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    list-style: none;
    font-size: 14px;
    padding: 0px;

    >li {
        text-transform: uppercase;
    }
`;

export const Tag = styled.li`
    opacity: 0.6;

    :before {
        content: "#";
    }
`;