import styled from "styled-components";

export const Root = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SkillsList = styled.ul`
    display: flex;
    flex-direction: column;
		align-items: center;
    list-style: none;
    padding: 0px;
    margin: 0px;

    >:not(:first-child) {
        margin-top: 4px;
    }
`;

export const ShowProjects = styled.a`
    display: block;
    text-align: center;
    color: var(--primary);
    font-size: 12px;
    margin: 24px 24px 0px 24px;
`;