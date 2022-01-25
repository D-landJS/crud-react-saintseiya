import { NavLink, Route, Routes } from 'react-router-dom';
import Loader from '../crud/Loader';
import Message from '../crud/Message';
import {
	MainContainer,
	MainHeader,
	MainNav,
	MainTitle,
} from '../crud/Container';

import { useContext } from 'react';
import CrudContext from './context/CrudContext';
import CrudTableReducers from './CrudTableReducers';
import CrudFormReducers from './CrudFormReducers';

const CrudApiReducers = () => {
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
								{db && <CrudTableReducers />}
							</article>
						</>
					}
				></Route>
				<Route path="santos">
					<Route path="agregar" element={<CrudFormReducers />} />
					<Route path="editar/:id" element={<CrudFormReducers />} />
				</Route>
			</Routes>
		</MainContainer>
	);
};

export default CrudApiReducers;
