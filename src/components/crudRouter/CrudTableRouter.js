import CrudTableRowRouter from './CrudTableRowRouter';

const CrudTableRouter = ({ data, setDataToEdit, deleteData }) => {
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
						data.map(el => (
							<CrudTableRowRouter
								key={el.id}
								el={el}
								setDataToEdit={setDataToEdit}
								deleteData={deleteData}
							/>
						))
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

export default CrudTableRouter;
