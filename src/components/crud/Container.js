import styled from 'styled-components';

export const MainContainer = styled.main`
	background-image: linear-gradient(-180deg, rgb(0, 0, 0), rgb(7, 14, 86));
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
	align-items: center;
	color: #fff;
	padding: 2rem;
	min-height: 70vh;

	@media screen and (max-width: 968px) {
		height: auto;
	}
`;

export const MainHeader = styled.header`
	width: 20%;
	margin-bottom: 2rem;
	margin-top: 4rem;
`;

export const MainNav = styled.nav`
	display: flex;
	justify-content: space-around;
`;

export const MainTitle = styled.h2`
	margin-bottom: 1rem;
	text-align: center;
`;
