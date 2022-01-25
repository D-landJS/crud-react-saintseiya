import { useEffect, useState } from 'react';
import { helpHttp } from '../../helpers/helpHttp';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {
	const [db, setDb] = useState(null);
	const [dataToEdit, setDataToEdit] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

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

	let api = helpHttp();

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
			`Deseas eliminar el caballero con el id ${id}`
		);

		if (isDelete) {
			let endpoint = `${url}/${id}`;
			let options = {
				headers: { 'content-type': 'application/json' },
			};

			api.del(endpoint, options).then(res => {
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
		<div className="wrapper">
			<h3>Crud Api Saint Seiya</h3>
			<div className="grid-1-2">
				<CrudForm
					createData={createData}
					updateData={updateData}
					dataToEdit={dataToEdit}
					setDataToEdit={setDataToEdit}
				/>
				{loading && <Loader />}
				{error && (
					<Message msg={`Error ${error.status}: ${error.statusText}`} />
				)}
				{db && (
					<CrudTable
						data={db}
						setDataToEdit={setDataToEdit}
						deleteData={deleteData}
					/>
				)}
			</div>
		</div>
	);
};

export default CrudApi;
