import React from 'react';

import { Titulo } from './styles';

// SEMPRE USAR PRIMEIRA LETRA MAIUSCULA PARA HOOK
// AMBOS COMANDOS SAO IGUAIS MAIS O SEGUNDO POSSUI UM VINCULO DE TIPAGEM MAIS FACIL
// function Home() {}
const Home: React.FC = () => {
	return <Titulo>Explore repositórios no Github</Titulo>;
};

export default Home;
