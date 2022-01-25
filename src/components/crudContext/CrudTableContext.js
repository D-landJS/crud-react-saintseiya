import { useContext } from 'react';
import CrudContext from './context/CrudContext';
import CrudTableRowContext from './CrudTableRowContext';

const CrudTableContext = () => {
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
						data.map(el => <CrudTableRowContext key={el.id} el={el} />)
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

export default CrudTableContext;
