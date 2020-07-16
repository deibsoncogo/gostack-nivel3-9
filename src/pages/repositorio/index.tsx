import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Cabecalho, RepositorioExtra, Issues } from './styles';

import ImagemGithub from '../../assets/imagem-github.svg';

interface RepositorioParams {
	repositorio: string;
}

// SEMPRE USAR PRIMEIRA LETRA MAIUSCULA PARA HOOK
// AMBOS COMANDOS SAO IGUAIS MAIS UM POSSUI O NOME DA TIPAGEM ABREVIADA
// const Repositorio: React.FunctionComponent = () => {}
const Repositorio: React.FC = () => {
	const { params } = useRouteMatch<RepositorioParams>();

	return (
		<>
			<Cabecalho>
				<img src={ImagemGithub} alt="Github Explorer" />
				<Link to="/">
					<FiChevronLeft size={16} />
					Voltar
				</Link>
			</Cabecalho>

			<RepositorioExtra>
				<header>
					<img
						src="https://avatars0.githubusercontent.com/u/62838219?s=460&v=4"
						alt="Deibson Cogo"
					/>
					<div>
						<strong>deibsoncogo/teste</strong>
						<p>Descrição do repostor</p>
					</div>
				</header>
				<ul>
					<li>
						<strong>1808</strong>
						<span>Stars</span>
					</li>
					<li>
						<strong>48</strong>
						<span>Forks</span>
					</li>
					<li>
						<strong>67</strong>
						<span>Issues abertas</span>
					</li>
				</ul>
			</RepositorioExtra>

			<Issues>
				<Link to="teste">
					<div>
						<strong>teste</strong>
						<p>teste</p>
					</div>

					<FiChevronRight size={20} />
				</Link>
			</Issues>
		</>
	);
};

export default Repositorio;
