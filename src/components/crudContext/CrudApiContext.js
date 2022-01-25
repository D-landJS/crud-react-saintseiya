import { NavLink, Route, Routes } from 'react-router-dom';
import Loader from '../crud/Loader';
import Message from '../crud/Message';
import {
	MainContainer,
	MainHeader,
	MainNav,
	MainTitle,
} from '../crud/Container';
import CrudFormContext from './CrudFormContext';
import CrudTableContext from './CrudTableContext';
import { useContext } from 'react';
import CrudContext from './context/CrudContext';

const CrudApiContext = () => {
	const { db, loading, error } = useContext(CrudContext);
	return (
		<MainContainer>
			<MainHeader>
				<MainTitle>Crud API con Context API</MainTitle>
				<MainNav>
					<NavLink
						to="santos/"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						Santos
					</NavLink>
					<NavLink
						to="santos/agregar"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						Agregar
					</NavLink>
				</MainNav>
			</MainHeader>
			<Routes>
				<Route
					path="santos/"
					element={
						<>
							<article>
								{loading && <Loader />}
								{error && (
									<Message msg={`Error ${error.status}: ${error.statusText}`} />
								)}
								{db && <CrudTableContext />}
							</article>
						</>
					}
				></Route>
				<Route path="santos">
					<Route path="agregar" element={<CrudFormContext />} />
					<Route path="editar/:id" element={<CrudFormContext />} />
				</Route>
			</Routes>
		</MainContainer>
	);
};

export default CrudApiContext;
