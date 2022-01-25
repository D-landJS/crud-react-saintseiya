import { useEffect, useReducer, useState } from 'react';
import { createContext } from 'react';
import { helpHttp } from '../../../helpers/helpHttp';
import { TYPES } from '../actions/crudActions';
import { crudInitialState, crudReducer } from '../reducers/crudReducer';

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
	const [state, dispatch] = useReducer(crudReducer, crudInitialState);
	const { db } = state;
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
					dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
				} else {
					setError(res);
					dispatch({ type: TYPES.NO_DATA });
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
				dispatch({ type: TYPES.CREATE_DATA, payload: res });
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
				dispatch({ type: TYPES.UPDATE_DATA, payload: data });
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
					dispatch({ type: TYPES.DELETE_DATA, payload: id });
				} else {
					setError(res);
				}
			});
		} else {
			return;
		}
	};

	const data = {
		db,
		error,
		loading,
		createData,
		dataToEdit,
		setDataToEdit,
		updateData,
		deleteData,
	};

	return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export { CrudProvider };
export default CrudContext;
