import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Titulo, CampoPesquisa, Repositorio } from './styles';
import ImagemGithub from '../../assets/imagem-github.svg';

// SEMPRE USAR PRIMEIRA LETRA MAIUSCULA PARA HOOK
// AMBOS COMANDOS SAO IGUAIS MAIS O SEGUNDO POSSUI UM VINCULO DE TIPAGEM MAIS FACIL
// function Home() {}
const Home: React.FC = () => {
	return (
		<>
			{/* UTILIZACAO DA IMAGEM IMPORTADA */}
			<img src={ImagemGithub} alt="Github Explorer" />
			<Titulo>Explore repositórios no Github</Titulo>

			<CampoPesquisa>
				{/* CRIA UM CAMPO PARA PESQUISA COM ESTE TEXTO DENTRO */}
				<input placeholder="Digite o nome do repositorio" />
				{/* CRIA UM BOTAO DO TIPO SUBMIT COM ESTE TEXTO DENTRO */}
				<button type="submit">Pesquisar</button>
			</CampoPesquisa>

			<Repositorio>
				<a href="teste">
					<img
						src="https://avatars0.githubusercontent.com/u/62838219?s=460&v=4"
						alt="Deibson Cogo"
					/>
					<div>
						<strong>rocketseat/unform</strong>
						<p>Descricao do repositorio</p>
					</div>
				</a>
			</Repositorio>
		</>
	);
};

export default Home;
