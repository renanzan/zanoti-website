import styled from "styled-components";

export const ArticlesContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    margin: 284px 24px 0px 24px;
    width: fit-content;
    max-width: 1400px;
    align-self: center;
    margin-bottom: 180px;

		@media (max-width:650px) {
			margin-top: 150px;
		}
`;