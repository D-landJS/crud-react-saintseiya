import {
	FooterContainer,
	IconLinks,
	IconLogo,
	MenuBar,
	MenuItem,
	MenuItemLink,
	MenuSocial,
	MenuSocialLinks,
	TitleSocial,
} from './Footer.elements';

import { FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
	return (
		<FooterContainer>
			<IconLogo>Saint Seiya</IconLogo>

			<MenuBar>
				<MenuItem>
					<MenuItemLink
						href="https://github.com/D-landJS/crud-react-saintseiya"
						target="_blank"
					>
						ABOUT PROJECT
					</MenuItemLink>
					<MenuItemLink
						href="https://personal-project-d-landjs.netlify.app/"
						target="_blank"
					>
						ABOUT THE CRUD DEVELOPER
					</MenuItemLink>
				</MenuItem>
			</MenuBar>

			<MenuSocial>
				<TitleSocial>SOCIAL MEDIA</TitleSocial>
				<MenuSocialLinks>
					<IconLinks
						href="https://github.com/D-landJS/crud-react-saintseiya"
						target="_blank"
					>
						<FaGithub />
					</IconLinks>
					<IconLinks
						href="https://www.facebook.com/Seiya_offcial-1660997434203037"
						target="_blank"
					>
						<FaFacebook />
					</IconLinks>
					<IconLinks href="https://twitter.com/seiya_offcial" target="_blank">
						<FaTwitter />
					</IconLinks>
				</MenuSocialLinks>
			</MenuSocial>
		</FooterContainer>
	);
};

export default Footer;
