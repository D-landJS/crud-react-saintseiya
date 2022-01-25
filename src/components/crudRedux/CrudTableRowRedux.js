import { useNavigate } from 'react-router-dom';

const CrudTableRowRedux = ({ el, setDataToEdit, deleteData }) => {
	let { id, name, constellation } = el;
	let navigate = useNavigate();

	const handleEdit = () => {
		setDataToEdit(el);
		navigate(`/crudApiRedux/santos/editar/${id}`);
	};
	return (
		<tr>
			<td>{name}</td>
			<td>{constellation}</td>
			<td>
				<button onClick={handleEdit}>Editar</button>
				<button onClick={() => deleteData(id)}>Eliminar</button>
			</td>
		</tr>
	);
};

export default CrudTableRowRedux;
