import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { helpHttp } from '../../helpers/helpHttp';
import Loader from '../crud/Loader';
import Message from '../crud/Message';
import {
	MainContainer,
	MainHeader,
	MainNav,
	MainTitle,
} from '../crud/Container';
import CrudTableRouter from './CrudTableRouter';
import CrudFormRouter from './CrudFormRouter';

const CrudApiRouter = () => {
	const [db, setDb] = useState(null);
	const [dataToEdit, setDataToEdit] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	let api = helpHttp();
	let url = 'https://saintseiya-fake-api.herokuapp.com/saints';

	useEffect(() => {
		setLoading(true);
		helpHttp()
			.get(url)
			.then(res => {
				if (!res.err) {
					setDb(res);
					setError(null);
				} else {
					setDb(null);
					setError(res);
				}

				setLoading(false);
			});
	}, [url]);

	const createData = data => {
		data.id = Date.now();
		let options = {
			body: data,
			headers: { 'content-type': 'application/json' },
		};
		api.post(url, options).then(res => {
			console.log(res);
			if (!res.err) {
				setDb([...db, res]);
			} else {
				setError(res);
			}
		});
	};

	const updateData = data => {
		let endpoint = `${url}/${data.id}`;
		console.log(endpoint);
		let options = {
			body: data,
			headers: { 'content-type': 'application/json' },
		};
		api.put(endpoint, options).then(res => {
			console.log(res);
			if (!res.err) {
				let newData = db.map(el => (el.id === data.id ? data : el));
				setDb(newData);
			} else {
				setError(res);
			}
		});
	};

	const deleteData = id => {
		let isDelete = window.confirm(
			`Deseas eliminar este caballero con el id '${id}'`
		);

		if (isDelete) {
			let endpoint = `${url}/${id}`;
			let options = {
				headers: { 'content-type': 'application/json' },
			};
			api.del(endpoint, options).then(res => {
				console.log(res);
				if (!res.err) {
					let newData = db.filter(el => el.id !== id);
					setDb(newData);
				} else {
					setError(res);
				}
			});
		} else {
			return;
		}
	};

	return (
		<MainContainer>
			<MainHeader>
				<MainTitle>Crud API con rutas</MainTitle>
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
								{db && (
									<CrudTableRouter
										data={db}
										setDataToEdit={setDataToEdit}
										deleteData={deleteData}
									/>
								)}
							</article>
						</>
					}
				></Route>
				<Route path="santos">
					<Route
						path="agregar"
						element={
							<CrudFormRouter
								createData={createData}
								updateData={updateData}
								dataToEdit={dataToEdit}
								setDataToEdit={setDataToEdit}
							/>
						}
					/>
					<Route
						path="editar/:id"
						element={
							<CrudFormRouter
								createData={createData}
								updateData={updateData}
								dataToEdit={dataToEdit}
								setDataToEdit={setDataToEdit}
							/>
						}
					/>
				</Route>
			</Routes>
		</MainContainer>
	);
};

export default CrudApiRouter;
