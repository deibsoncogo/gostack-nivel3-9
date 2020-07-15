import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalEstilo from './styles/global';
import Rotas from './routes';

const App: React.FC = () => (
	<>
		<BrowserRouter>
			<Rotas />
		</BrowserRouter>
		<GlobalEstilo />
	</>
);

export default App;
