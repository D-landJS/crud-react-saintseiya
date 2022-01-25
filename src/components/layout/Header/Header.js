import { useState } from 'react';
import {
	HeaderContainer,
	HeaderWrapper,
	IconLogo,
	IconLogoMobile,
	Logo,
} from './Header.elements';

import logo from '../../../assets/logo1.png';
import Menu from './Menu';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
	const [click, setClick] = useState(false);

	const changeClick = _ => {
		setClick(!click);
	};

	return (
		<HeaderContainer>
			<HeaderWrapper>
				<IconLogo>
					<Link to="">
						<Logo src={logo} alt="saint seiya" />
					</Link>
				</IconLogo>
				<IconLogoMobile onClick={() => changeClick()}>
					{click ? <FaTimes /> : <FaBars />}
				</IconLogoMobile>
				<Menu click={click} changeClick={changeClick} />
			</HeaderWrapper>
		</HeaderContainer>
	);
};

export default Header;
