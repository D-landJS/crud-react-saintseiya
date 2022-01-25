import { CrudProvider } from './context/CrudContext';
import CrudApiReducers from './CrudApiReducers';

const CrudContextReducers = () => {
	return (
		<CrudProvider>
			<CrudApiReducers />
		</CrudProvider>
	);
};

export default CrudContextReducers;
