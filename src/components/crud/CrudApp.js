import { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

let initialDB = [
	{
		id: 1,
		name: 'Seiya',
		constellation: 'Pegasus',
	},
	{
		id: 2,
		name: 'Shiryu',
		constellation: 'Dragon',
	},
	{
		id: 3,
		name: 'Hyoga',
		constellation: 'Cygnus',
	},
	{
		id: 4,
		name: 'Shun',
		constellation: 'Pegasus',
	},
	{
		id: 5,
		name: ' Phoenix',
		constellation: 'Ikki',
	},
];

const CrudApp = () => {
	const [db, setDb] = useState(initialDB);
	const [dataToEdit, setDataToEdit] = useState(null);

	const createData = data => {
		data.id = Date.now();
		setDb([...db, data]);
	};
	const updateData = data => {
		let newData = db.map(el => (el.id === data.id ? data : el));
		setDb(newData);
	};
	const deleteData = id => {
		let isDelete = window.confirm(
			`Deseas eliminar el caballero con el id ${id}`
		);

		if (isDelete) {
			let newData = db.filter(el => el.id !== id);
			setDb(newData);
		} else {
			return;
		}
	};

	return (
		<div className="wrapper">
			<h3>Crud App Saint Seiya</h3>
			<div className="grid-1-2">
				<CrudForm
					createData={createData}
					updateData={updateData}
					dataToEdit={dataToEdit}
					setDataToEdit={setDataToEdit}
				/>
				<CrudTable
					data={db}
					setDataToEdit={setDataToEdit}
					deleteData={deleteData}
				/>
			</div>
		</div>
	);
};

export default CrudApp;
