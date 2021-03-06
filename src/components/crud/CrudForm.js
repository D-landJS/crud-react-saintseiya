import { useEffect, useState } from 'react';

const initialForm = {
	name: '',
	constellation: '',
	id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
	const [form, setForm] = useState(initialForm);

	useEffect(() => {
		if (dataToEdit) {
			setForm(dataToEdit);
		} else {
			setForm(initialForm);
		}
	}, [dataToEdit]);

	const handleChange = e => {
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (!form.name || !form.constellation) {
			alert('Datos incompletos');
		}

		if (form.id === null) {
			createData(form);
		} else {
			updateData(form);
		}

		handleReset();
	};

	const handleReset = _ => {
		setForm(initialForm);
		setDataToEdit(null);
	};

	return (
		<div className="crudform">
			<h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Nombre"
					onChange={handleChange}
					value={form.name}
				/>
				<input
					type="text"
					name="constellation"
					placeholder="Constelación"
					onChange={handleChange}
					value={form.constellation}
				/>
				<input type="submit" value="Enviar" />
			</form>
		</div>
	);
};

export default CrudForm;
