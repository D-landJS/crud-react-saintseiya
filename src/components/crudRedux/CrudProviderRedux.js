import React from 'react';
import { Provider } from 'react-redux';
import CrudApiRedux from './CrudApiRedux';
import store from './store';

const CrudProviderRedux = () => {
	return (
		<Provider store={store}>
			<CrudApiRedux />
		</Provider>
	);
};

export default CrudProviderRedux;
