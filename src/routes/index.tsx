import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePagina from '../pages/home';
import RepositorioPagina from '../pages/repositorio';

const Rota: React.FC = () => (
	// IMPEDE QUE AS ROTAS SE UNIFIQUEM
	<Switch>
		{/* DEFINE QUE O CAMINHO DEVE SER EXATO */}
		<Route path="/" exact component={HomePagina} />
		<Route path="/repositorio" component={RepositorioPagina} />
	</Switch>
);

export default Rota;
