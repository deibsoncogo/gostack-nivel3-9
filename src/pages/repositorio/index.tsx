import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';

import ApiServico from '../../services/api';

import ImagemGithub from '../../assets/imagem-github.svg';

import { Cabecalho, Informacao, SubInformacao } from './styles';

interface UsuarioParams {
	usuario: string;
}

interface Usuario {
	id: number;
	name: string;
	login: string;
	avatar_url: string;
	bio: string;
	location: string;
	public_repos: number;
	followers: number;
	following: number;
}

interface Repositorios {
	id: number;
	name: string;
	html_url: string;
	description: string;
	owner: {
		login: string;
	};
}

// SEMPRE USAR PRIMEIRA LETRA MAIUSCULA PARA HOOK
// AMBOS COMANDOS SAO IGUAIS MAIS UM POSSUI O NOME DA TIPAGEM ABREVIADA
// const Usuario: React.FunctionComponent = () => {}
const Usuario: React.FC = () => {
	const [usuario, setUsuario] = useState<Usuario | null>(null);
	const [repositorios, setRepositorios] = useState<Repositorios[]>([]);

	const { params } = useRouteMatch<UsuarioParams>();

	useEffect(() => {
		// PARA SABER O CAMINHO DAS INFORMACOES CONSULTAMOS O GITHUB
		// https://www.api.github.com/
		ApiServico.get(`users/${params.usuario}`).then(response => {
			// console.log(response.data); //eslint-disable-line
			setUsuario(response.data);
		});

		ApiServico.get(`users/${params.usuario}/repos`).then(response => {
			setRepositorios(response.data);
		});
	}, [params.usuario]);

	return (
		<>
			<Cabecalho>
				<img src={ImagemGithub} alt="Github Explorer" />
				<Link to="/">
					<FiChevronLeft size={16} />
					Voltar
				</Link>
			</Cabecalho>

			{/* CRIA UMA VERIFICACAO TIPO IF */}
			{usuario && (
				<Informacao>
					<header>
						<img
							// AS DUAS LINHAS ABAIXO POSSUI O MESMO PODER DE VERIFICACAO IF
							// src={usuario ? usuario.owner.avatar_url : null}
							// src={usuario?.owner.avatar_url}
							src={usuario.avatar_url}
							alt={usuario.login}
						/>
						<div>
							<strong>{usuario.name}</strong>
							<p>{usuario.bio ? usuario.bio : usuario.location}</p>
						</div>
					</header>
					<ul>
						<li>
							<strong>{usuario.public_repos}</strong>
							<span>Repositórios</span>
						</li>
						<li>
							<strong>{usuario.followers}</strong>
							<span>Seguidores</span>
						</li>
						<li>
							<strong>{usuario.following}</strong>
							<span>Seguindo</span>
						</li>
					</ul>
				</Informacao>
			)}

			<SubInformacao>
				{repositorios.map(repositorio => (
					<a key={repositorio.id} href={repositorio.html_url}>
						<div>
							<strong>{repositorio.name}</strong>
							<p>{repositorio?.description}</p>
						</div>

						<FiChevronRight size={20} />
					</a>
				))}
			</SubInformacao>
		</>
	);
};

export default Usuario;
