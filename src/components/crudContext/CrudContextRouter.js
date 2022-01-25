import { CrudProvider } from './context/CrudContext';
import CrudApiContext from './CrudApiContext';

const CrudContextRouter = () => {
	return (
		<CrudProvider>
			<CrudApiContext />
		</CrudProvider>
	);
};

export default CrudContextRouter;
