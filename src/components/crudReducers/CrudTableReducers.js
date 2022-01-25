import { useContext } from 'react';
import CrudContext from './context/CrudContext';
import CrudTableRowReducers from './CrudTableRowReducers';

const CrudTableReducers = () => {
	const { db: data } = useContext(CrudContext);
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Constelación</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{data.length > 0 ? (
						data.map(el => <CrudTableRowReducers key={el.id} el={el} />)
					) : (
						<tr>
							<td colSpan="3">Sin datos...</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default CrudTableReducers;
