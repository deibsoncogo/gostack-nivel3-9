import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Rotas from './routes';

import GlobalEstilo from './styles/global';

const App: React.FC = () => (
	<>
		<BrowserRouter>
			<Rotas />
		</BrowserRouter>
		<GlobalEstilo />
	</>
);

export default App;
