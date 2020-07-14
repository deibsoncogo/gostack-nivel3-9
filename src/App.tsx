import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Rotas from './routes';

const App: React.FC = () => (
	<BrowserRouter>
		<Rotas />
	</BrowserRouter>
);

export default App;
