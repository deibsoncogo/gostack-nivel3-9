import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import ApiServico from '../../services/api';
import { Titulo, CampoPesquisa, Repositorio, Erro } from './styles';
import ImagemGithub from '../../assets/imagem-github.svg';

// DEVEMOS TIPAR SOMENTES OS ITENS QUE IREMOS UTILIZAR
interface Repositorio {
	full_name: string;
	description: string;
	owner: {
		login: string;
		avatar_url: string;
	};
}

// SEMPRE USAR PRIMEIRA LETRA MAIUSCULA PARA HOOK
// AMBOS COMANDOS SAO IGUAIS MAIS O SEGUNDO POSSUI UM VINCULO DE TIPAGEM MAIS FACIL
// function Home() {}
const Home: React.FC = () => {
	// PARA SALVAR AS MENSAGENS DE ERRO
	const [erro, setErro] = useState('');
	// PARA SALVAR OS CRITERIOS DE BUSCA
	const [novoRepositorio, setNovoRepositorio] = useState('');
	// PARA SALVAR OS REPOSITORIOS JA PESQUISADO
	const [repositorios, setRepositorios] = useState<Repositorio[]>([]);

	async function usuarioAdicionarRepositorio(
		event: FormEvent<HTMLFormElement>,
	): Promise<void> {
		// DESATIVA ATUALIZACAO DA PAGINA
		event.preventDefault();

		if (!novoRepositorio) {
			setErro('Digite o author/nome do repositorio');
			return;
		}

		try {
			// BUSCA A INFORMACAO
			const response = await ApiServico.get<Repositorio>(`repos/${novoRepositorio}`);

			const repositorio = response.data;

			// SALVA A INFORMACAO UTILIZANDO A IMUTABILIDADE
			setRepositorios([...repositorios, repositorio]);

			// APAGA OS ITENS DIGITADO
			setNovoRepositorio('');
			setErro('');
		} catch (err) {
			setErro('Repositorio não encontrado');
		}
	}

	return (
		<>
			{/* UTILIZACAO DA IMAGEM IMPORTADA */}
			<img src={ImagemGithub} alt="Github Explorer" />
			<Titulo>Explore repositórios no Github</Titulo>

			{/* EXECUTAR UMA FUNCAO QUANDO ACONTECER UM SUBMIT */}
			{/* OS DOIS !! VAI VERIFICAR SE A VARIAVEL POSSUI VALOR */}
			{/* ! DEFINE PARA EXECUTAR A TAREFA QUANDO FOR true */}
			{/* !! DEFINE PARA EXECUTAR A TAREFA QUANDO FOR false */}
			<CampoPesquisa temErro={!!erro} onSubmit={usuarioAdicionarRepositorio}>
				{/* CRIA UM CAMPO PARA PESQUISA COM ESTE TEXTO DENTRO */}
				<input
					// SALVO O DIGITADO DENTRO DESTA VARIAVEL
					value={novoRepositorio}
					// SALVA O BANCO DE DADOS DE PESQUISA
					onChange={e => setNovoRepositorio(e.target.value)}
					// INFORMACAO ESCRITO DENTRO DO CAMPO
					placeholder="Digite o nome do repositorio"
				/>
				{/* CRIA UM BOTAO DO TIPO SUBMIT COM ESTE TEXTO DENTRO */}
				<button type="submit">Pesquisar</button>
			</CampoPesquisa>

			{/* MESMA COISA QUE UM if */}
			{erro && <Erro>{erro}</Erro>}

			<Repositorio>
				{/* REALIZA UMA LISTAGEM DE TODOS DADOS SALVO */}
				{repositorios.map(repositorio => (
					<a key={repositorio.full_name} href="teste">
						<img src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />
						<div>
							<strong>{repositorio.full_name}</strong>
							<p>{repositorio.description}</p>
						</div>

						{/* ICONE DE SETA DO CAMPO */}
						<FiChevronRight size={20} />
					</a>
				))}
			</Repositorio>
		</>
	);
};

export default Home;
