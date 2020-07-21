import { createGlobalStyle } from 'styled-components';

import BackgroundGithub from '../assets/background-github.svg';

export default createGlobalStyle`
	* {
		margin: 0; /* MARGEM */
		padding: 0; /* CONTORNO */
		outline: 0; /* BORDA */
		box-sizing: border-box; /* DIMENSIONAMENTO */
	}

	body {
		/* DEFINE UMA COR DE FUNDO MAIS UMA IMAGEM QUE NAO REPETE E FICA NO TOPO DA TELA
		OCUPANDO UM TAMANHO DE 70% DA TELA */
		background: #f0f0f5 url(${BackgroundGithub}) no-repeat 70% top;
		-webkit-font-smoothing: antialiased; /* DEIXA OS ESCRITO MAIS DEFINIDO */
	}

	body, input, button {
		/* SE A FONTE ROBOTO NAO ESTIVER DISPONIVEL USAR UMA SEM SERIF */
		font: 16px Roboto, sans-serif;
	}

	button {
		cursor: pointer; /* EXIBIR O PONTEIRO NO BOTAO */
	}

	#root {
		max-width: 960px; /* TAMANHO MAXIMO */
		margin: 0 auto; /* MARGEM */
		padding: 40px 20px; /* CONTORNO */
	}
`;
