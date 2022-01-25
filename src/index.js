import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import CrudApp from './components/crud/CrudApp';
import CrudApi from './components/crud/CrudApi';

import Error404 from './routes/Error404';
import CrudApiRouter from './components/crudRouter/CrudApiRouter';
import CrudContextRouter from './components/crudContext/CrudContextRouter';
import CrudContextReducers from './components/crudReducers/CrudContextReducers';
import CrudProviderRedux from './components/crudRedux/CrudProviderRedux';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<Header />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="crudApp" element={<CrudApp />} />
				<Route path="crudApi" element={<CrudApi />} />
				<Route path="crudApiRouter/*" element={<CrudApiRouter />} />
				<Route path="crudContextRouter/*" element={<CrudContextRouter />} />
				<Route path="crudContextReducers/*" element={<CrudContextReducers />} />
				<Route path="crudApiRedux/*" element={<CrudProviderRedux />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
			<Footer />
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
