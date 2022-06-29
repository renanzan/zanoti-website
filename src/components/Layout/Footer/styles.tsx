import styled from "styled-components";

import NavLinks from "../NavLinks";

export const Root = styled.footer`
	display: flex;
	justify-content: center;
	background: #222225;
	box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
	display: flex;
	gap: 32px;
	width: 100%;
	max-width: 1200px;
	padding: 124px 24px 124px 24px;

	>section {
		display: flex;
		flex-direction: column;

		:first-child {
			flex: 1;
		}
	}

	@media (max-width:900px) {
		flex-direction: column;
		padding: 48px 24px;
		width: fit-content;
		gap: 8px;

		>section {
			flex-direction: column-reverse;
		}
	}
`;

export const SayHello = styled.div`
	flex: 1;
	font-size: 16px;
	font-weight: 400;

	>h2 {
		margin: 0px;
		font-weight: 400;

		>a {
				color: var(--primary);
		}

		:not(:first-child) {
				margin-top: 16px;
		}
	}
`;

export const SiteRights = styled.div`
	display: flex;
	align-items: center;

	>svg {
		height: auto;
		width: 160px;
	}

	>label {
		margin-left: 40px;
		color: rgba(255, 255, 255, 0.6);
		font-size: 14px;
	}

	@media (max-width:900px) {
		display: none;
	}
`;

export const MobileSiteRights = styled(SiteRights)`
	display: none;

	@media (max-width:900px) {
		display: flex;
		flex-direction: column;
		margin-top: 16px;

		> svg {
			width: 120px;
		}

		> label {
			margin: 16px 0px 0px 0px ;
			font-size: 12px;
		}
	}
`;

export const WebsiteDevInfo = styled.div`
	>span {
		font-size: 14px;
		color: rgba(255, 255, 255, 0.6);
	}

	>h3 {
		margin: 8px 0px 0px 0px;
		font-size: 24px;
	}
`;

export const CustomNavLinks = styled(NavLinks)`
	flex-direction: column;
	margin-top: 56px;

	>:not(:first-child) {
		margin-top: 24px;
	}
`;

export const SocialLinks = styled.div`
	display: flex;
	align-items: center;
	margin-top: 56px;

	>a {
		margin-left: 24px;
		transition: 250ms;
	}

	>a:hover {
		svg {
			fill: var(--primary);
		}
	}

	@media (max-width:900px) {
		margin: 8px 0px 24px 0px;
		justify-content: center;

		>:first-child {
			margin: 0px;
		}
	}
`;