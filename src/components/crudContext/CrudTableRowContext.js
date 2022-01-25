import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CrudContext from './context/CrudContext';

const CrudTableRowContext = ({ el }) => {
	const { setDataToEdit, deleteData } = useContext(CrudContext);
	let { id, name, constellation } = el;
	let navigate = useNavigate();

	const handleEdit = () => {
		setDataToEdit(el);
		navigate(`/crudContextRouter/santos/editar/${id}`);
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

export default CrudTableRowContext;
