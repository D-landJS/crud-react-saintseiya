import styled from 'styled-components';

export const HeaderContainer = styled.div`
	position: sticky;
	top: 0;
	z-index: 99;
	width: 100%;
	height: 80px;
	background: linear-gradient(to right, #43c6ac, #191654);
	/* background-color: rgb(71, 72, 72) !important; */
`;

export const HeaderWrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: auto;
	width: 100%;
	max-width: 1300px;
	height: 100%;
`;

export const IconLogo = styled.div`
	width: 6%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	font-family: 'Oswald';
	font-size: 1.4rem;
	color: #dc4;
	@media screen and (max-width: 968px) {
		margin-left: 3rem;
		width: 10%;
	}
`;

export const Logo = styled.img`
	width: 100%;
`;

export const IconLogoMobile = styled.div`
	display: none;

	@media screen and (max-width: 968px) {
		display: flex;
		color: #ebc88b;
		font-size: 2rem;
		padding-right: 1rem;
	}
`;
