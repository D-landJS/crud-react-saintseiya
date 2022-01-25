import { MenuBar, MenuItem, MenuItemLink } from './Menu.elements';

const Menu = ({ click, changeClick }) => {
	return (
		<MenuBar click={click}>
			<MenuItem onClick={() => changeClick()}>
				<MenuItemLink to="crudApp">Crud App</MenuItemLink>
			</MenuItem>
			<MenuItem onClick={() => changeClick()}>
				<MenuItemLink to="crudApi">Crud Api</MenuItemLink>
			</MenuItem>
			<MenuItem onClick={() => changeClick()}>
				<MenuItemLink to="crudApiRouter">Router</MenuItemLink>
			</MenuItem>
			<MenuItem onClick={() => changeClick()}>
				<MenuItemLink to="crudContextRouter">Context</MenuItemLink>
			</MenuItem>
			<MenuItem onClick={() => changeClick()}>
				<MenuItemLink to="crudContextReducers">Reducers</MenuItemLink>
			</MenuItem>
			<MenuItem onClick={() => changeClick()}>
				<MenuItemLink to="crudApiRedux">Redux</MenuItemLink>
			</MenuItem>
		</MenuBar>
	);
};

export default Menu;
