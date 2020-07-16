import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositorioParams {
	repositorio: string;
}

// SEMPRE USAR PRIMEIRA LETRA MAIUSCULA PARA HOOK
// AMBOS COMANDOS SAO IGUAIS MAIS UM POSSUI O NOME DA TIPAGEM ABREVIADA
// const Repositorio: React.FunctionComponent = () => {}
const Repositorio: React.FC = () => {
	const { params } = useRouteMatch<RepositorioParams>();

	return <h1>Repositorio:{params.repositorio}</h1>;
};

export default Repositorio;
