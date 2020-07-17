import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import ApiServico from '../../services/api';

import ImagemGithub from '../../assets/imagem-github.svg';

import { Titulo, Pesquisa, ListarUsuario, Erro } from './styles';

// DEVEMOS TIPAR SOMENTES OS ITENS QUE IREMOS UTILIZAR
interface Usuario {
	id: number;
	name: string;
	login: string;
	avatar_url: string;
	bio: string;
	location: string;
	repos_url: string;
}

// SEMPRE USAR PRIMEIRA LETRA MAIUSCULA PARA HOOK
// AMBOS COMANDOS SAO IGUAIS MAIS O SEGUNDO POSSUI UM VINCULO DE TIPAGEM MAIS FACIL
// function Home() {}
const Home: React.FC = () => {
	// PARA SALVAR AS MENSAGENS DE ERRO
	const [erro, setErro] = useState('');

	// PARA SALVAR OS CRITERIOS DE BUSCA
	const [busca, setBusca] = useState('');

	// PARA SALVAR OS REPOSITORIOS JA PESQUISADO
	const [usuarios, setUsuarios] = useState<Usuario[]>(() => {
		// CRIA UMA FUNCAO PARA DEFINIR COM QUAL VALOR INICIAR
		const storageUsuarios = localStorage.getItem('@GithubExplorer:usuarios');

		// CASO NAO TENHA NADA SALVO RETORNAR UM ARRAY VAZIO
		if (storageUsuarios) {
			// CONVERTE AS INFORMACOES DE UMA STRING PARA ARRAY: JSON.parse
			return JSON.parse(storageUsuarios);
		}
		return [];
	}); // INICIA COMO UM ARRAY

	useEffect(() => {
		// ATIVA O STORAGE PARA SALVAR AS INFORMACOES NESTE CAMINHO
		// CONVERTE AS INFORMACOES DE UM ARRAY PARA STRING: JSON.stringify
		localStorage.setItem('@GithubExplorer:usuarios', JSON.stringify(usuarios));
	}, [usuarios]);

	async function usuarioAdicionarUsuario(
		event: FormEvent<HTMLFormElement>,
	): Promise<void> {
		// DESATIVA ATUALIZACAO DA PAGINA
		event.preventDefault();

		if (!busca) {
			setErro('Login não digitado');
			return;
		}

		try {
			// BUSCA A INFORMACAO
			const response = await ApiServico.get<Usuario>(`users/${busca}`);

			const usuario = response.data;

			// SALVA A INFORMACAO UTILIZANDO A IMUTABILIDADE
			setUsuarios([...usuarios, usuario]);

			// APAGA OS ITENS DIGITADO
			setBusca('');
			setErro('');
		} catch (err) {
			setErro('Usuário não encontrado');
		}
	}

	return (
		<>
			{/* UTILIZACAO DA IMAGEM IMPORTADA */}
			<img src={ImagemGithub} alt="Github Explorer" />
			<Titulo>Explore os usuários do Github</Titulo>

			{/* EXECUTAR UMA FUNCAO QUANDO ACONTECER UM SUBMIT */}
			{/* OS DOIS !! VAI VERIFICAR SE A VARIAVEL POSSUI VALOR */}
			{/* ! DEFINE PARA EXECUTAR A TAREFA QUANDO FOR true */}
			{/* !! DEFINE PARA EXECUTAR A TAREFA QUANDO FOR false */}
			<Pesquisa temErro={!!erro} onSubmit={usuarioAdicionarUsuario}>
				{/* CRIA UM CAMPO PARA PESQUISA COM ESTE TEXTO DENTRO */}
				<input
					// SALVO O DIGITADO DENTRO DESTA VARIAVEL
					value={busca}
					// SALVA O BANCO DE DADOS DE PESQUISA
					onChange={e => setBusca(e.target.value)}
					// INFORMACAO ESCRITO DENTRO DO CAMPO
					placeholder="Digite o login do usuário"
				/>
				{/* CRIA UM BOTAO DO TIPO SUBMIT COM ESTE TEXTO DENTRO */}
				<button type="submit">Pesquisar</button>
			</Pesquisa>

			{/* MESMA COISA QUE UM if */}
			{erro && <Erro>{erro}</Erro>}

			<ListarUsuario>
				{/* REALIZA UMA LISTAGEM DE TODOS DADOS SALVO */}
				{usuarios.map(usuario => (
					// <a key={usuario.id} href="teste">
					<Link key={usuario.id} to={`/repositorio/${usuario.login}`}>
						<img src={usuario.avatar_url} alt={usuario.login} />
						<div>
							<strong>{usuario.name}</strong>
							<p>{usuario.location ? usuario.location : usuario.bio}</p>
						</div>

						{/* ICONE DE SETA DO CAMPO */}
						<FiChevronRight size={20} />
					</Link>
				))}
			</ListarUsuario>
		</>
	);
};

export default Home;
