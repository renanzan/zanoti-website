import styled from "styled-components";

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    width: 433px;
    background: #2D2E32;
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    box-shadow: 0px 30px 40px -5px rgba(0, 0, 0, 0.15);
    user-select: none;
    opacity: 0.8;

    > * {
        pointer-events: none;
    }

    :hover {
        > h2 {
            text-decoration: underline;
        }
    }
`;