import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import ApiServico from '../../services/api';
import { Cabecalho, RepositorioExtra, Issues } from './styles';

import ImagemGithub from '../../assets/imagem-github.svg';

interface RepositorioParams {
	repositorio: string;
}

interface Repositorio {
	full_name: string;
	description: string;
	stargazers_count: number;
	forks_count: number;
	open_issues_count: number;
	owner: {
		login: string;
		avatar_url: string;
	};
}

interface Issues {
	id: number;
	title: string;
	html_url: string;
	user: {
		login: string;
	};
}

// SEMPRE USAR PRIMEIRA LETRA MAIUSCULA PARA HOOK
// AMBOS COMANDOS SAO IGUAIS MAIS UM POSSUI O NOME DA TIPAGEM ABREVIADA
// const Repositorio: React.FunctionComponent = () => {}
const Repositorio: React.FC = () => {
	const [repositorio, setRepositorio] = useState<Repositorio | null>(null);
	const [issues, setIssues] = useState<Issues[]>([]);

	const { params } = useRouteMatch<RepositorioParams>();

	useEffect(() => {
		ApiServico.get(`repos/${params.repositorio}`).then(response => {
			setRepositorio(response.data);
		});

		ApiServico.get(`repos/${params.repositorio}/issues`).then(response => {
			setIssues(response.data);
		});
	}, [params.repositorio]);

	return (
		<>
			<Cabecalho>
				<img src={ImagemGithub} alt="Github Explorer" />
				<Link to="/">
					<FiChevronLeft size={16} />
					Voltar
				</Link>
			</Cabecalho>

			{repositorio && (
				<RepositorioExtra>
					<header>
						<img src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />
						<div>
							<strong>{repositorio.full_name}</strong>
							<p>{repositorio.description}</p>
						</div>
					</header>
					<ul>
						<li>
							<strong>{repositorio.stargazers_count}</strong>
							<span>Stars</span>
						</li>
						<li>
							<strong>{repositorio.forks_count}</strong>
							<span>Forks</span>
						</li>
						<li>
							<strong>{repositorio.open_issues_count}</strong>
							<span>Issues abertas</span>
						</li>
					</ul>
				</RepositorioExtra>
			)}

			<Issues>
				{issues.map(issue => (
					<a key={issue.id} href={issue.html_url}>
						<div>
							<strong>{issue.title}</strong>
							<p>{issue.user.login}</p>
						</div>

						<FiChevronRight size={20} />
					</a>
				))}
			</Issues>
		</>
	);
};

export default Repositorio;
