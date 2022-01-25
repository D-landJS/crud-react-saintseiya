import styled from 'styled-components';

export const FooterContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
	min-height: 218px;
	color: #fff;
	background-color: #000;
`;

export const IconLogo = styled.div`
	font-size: 2rem;
	width: 200px;
`;

export const MenuBar = styled.ul`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const MenuItem = styled.li`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: flex-start;
	font-size: 1.2rem;
	font-family: 'Oswald';
	font-weight: 400;
`;

export const MenuItemLink = styled.a`
	text-decoration: none;
	color: #dc4;
	margin-bottom: 1rem;
	cursor: pointer;

	&:hover {
		color: #6c641a;
		transition: 0.5s ease-in-out;
	}
`;

export const MenuSocial = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TitleSocial = styled.h5`
	text-transform: uppercase;
	font-size: 1.25rem;
`;

export const MenuSocialLinks = styled.div`
	font-size: 20px;
	display: flex;
	justify-content: space-between;
	margin-top: 1rem;
`;

export const IconLinks = styled.a`
	color: #dc4;
	text-decoration: none;

	&:hover {
		color: #6c641a;
		transition: 0.5s ease-in-out;
	}
`;
