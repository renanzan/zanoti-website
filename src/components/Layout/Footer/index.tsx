import { NextComponentType } from "next";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";

import DynamicLogo from "components/DynamicLogo";

import * as S from "./styles";

const Footer: NextComponentType = () => {
	return (
		<S.Root>
			<S.Content>
				<section>
					<S.SayHello>
						<h2>Vamos criar algo incrível juntos?</h2>
						<h2>Comece <Link href="/contact" passHref><a>dizendo olá</a></Link>.</h2>
					</S.SayHello>

					<S.SiteRights>
						<DynamicLogo />

						<label>© 2022. All Rights Reserved</label>
					</S.SiteRights>
				</section>

				<section>
					<S.WebsiteDevInfo>
						<span>Site projetado e construído por Renan Zanoti</span>
						<h3><a href="mailto:rh.zanoti@gmail.com">rh.zanoti@gmail.com</a></h3>
					</S.WebsiteDevInfo>

					<S.CustomNavLinks />

					<S.SocialLinks>
						<Link href="https://github.com/renanzan" passHref>
							<a target="_blank"><FaGithub size={24} /></a>
						</Link>

						<Link href="https://www.linkedin.com/in/renanzan/" passHref>
							<a target="_blank"><FaLinkedin size={24} /></a>
						</Link>

						<Link href="https://dev.to/renanzan" passHref>
							<a target="_blank"><FaDev size={24} /></a>
						</Link>
					</S.SocialLinks>
				</section>

				<S.MobileSiteRights>
					<DynamicLogo />

					<label>© 2022. All Rights Reserved</label>
				</S.MobileSiteRights>
			</S.Content>
		</S.Root>
	)
}

export default Footer;