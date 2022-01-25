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
import CrudFormRedux from './CrudFormRedux';
import CrudTableRedux from './CrudTableRedux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
	createAction,
	deleteAction,
	noAction,
	readAllAction,
	updateAction,
} from './actions/crudActions';

const CrudApiRedux = () => {
	const state = useSelector(state => state);
	const dispatch = useDispatch();
	const { db } = state.crud;
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
					dispatch(readAllAction(res));
					setError(null);
				} else {
					dispatch(noAction());
					setError(res);
				}

				setLoading(false);
			});
	}, [url, dispatch]);

	const createData = data => {
		data.id = Date.now();
		let options = {
			body: data,
			headers: { 'content-type': 'application/json' },
		};
		api.post(url, options).then(res => {
			console.log(res);
			if (!res.err) {
				dispatch(createAction(res));
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
				dispatch(updateAction(res));
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
					dispatch(deleteAction(id));
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
									<CrudTableRedux
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
							<CrudFormRedux
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
							<CrudFormRedux
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

export default CrudApiRedux;
