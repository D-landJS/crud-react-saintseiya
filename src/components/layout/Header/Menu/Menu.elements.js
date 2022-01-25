import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuBar = styled.ul`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 968px) {
		width: 100%;
		height: 90vh;
		position: absolute;
		top: 80px;
		left: ${({ click }) => (click ? '0' : '-100%')};
		flex-direction: column;
		transition: 0.5s all ease-in;
		background: linear-gradient(to right, #43c6ac, #191654);
	}
`;

export const MenuItem = styled.li`
	height: 100%;
	padding: 0.5rem 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	font-family: 'Oswald';
	font-weight: 400;

	@media screen and (max-width: 968px) {
		width: 100%;
		height: 70px;
	}
`;

export const MenuItemLink = styled(Link)`
	text-decoration: none;
	color: #dc4;

	&:hover {
		color: #9b913c;
		transition: 0.5s ease-in-out;
	}
`;
