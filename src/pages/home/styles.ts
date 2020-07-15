import Styled from 'styled-components';
import { shade } from 'polished';

// TEMPLATE LITERALS E A UTILIZACAO DE ``
export const Titulo = Styled.h1`
	font-size: 48px; /* TAMANHO */
	color: #3a3a3a; /* COR */
	max-width: 450px; /* TAMANHO MAXIMO */
	line-height: 56px; /* TAMANHO DO ESPACO ENTRE LINHAS */
	margin-top: 80px; /* MARGEM SUPERIOR */
`;

export const CampoPesquisa = Styled.form`
	margin-top: 40px;
	max-width: 700px;
	display: flex; /* TARFORMA ELE EM UM FLEX */

	/* FAZ QUE TODO input DENTRO DO CampoPesquisa VAI SER ASSIM */
	input {
		flex: 1; /* FAZ O BOTAO OCULPAR TODO ESPACO DISPONIVEL DA TELA */
		height: 70px; /* ALTURA */
		padding: 0 24px;
		border: 0;
		border-radius: 5px 0 0 5px; /* BORDA INTERNA */
		color: #3a3a3a;

		&::placeholder {
			color: #a8a8b3;
		}
	}

	button {
		width: 210px; /* TAMANHO */
		height: 70px;
		background: #04d361;
		border-radius: 0px 5px 5px 0px;
		border: 0px;
		color: #ffffff;
		font-weight: bold; /* DEIXA O TEXTO NEGRITO */
		transition: background-color 0.2s; /* TEMPO DE ATRAZO DA ANIMACAO */

		/* CRIA UM REGRA PARA EXECUTAR QUANDO TIVER UM hover */
		&:hover {
			background: ${shade(0.2, '#04d361')}
		}
	}
`;

export const Repositorio = Styled.div`
	margin-top: 80px;
	max-width: 700px;

	a {
		background: #ffffff;
		border-radius: 5px;
		width: 100%;
		padding: 24px;
		display: block; /* O QUE DEVE FICAR POR CIMA DO FUNDO */
		text-decoration: none; /* REMOVE OS ERROS DOS TEXTOS */

		display: flex; /* JOGA OS ITENS PARA O LADO */
    align-items: center; /* ALINHA OS ITENS AO CENTRO */
    transition: transform 0.2s;

		/* DEFINE QUE SE O ITEM ANTERIOR DA LISTA FOR a UTILIZAR AS COFIGURACOES */
		& + a {
			margin-top: 16px;
		}

		&:hover {
			transform: translatex(10px); /* ANIMACAO DE IR PARA O LADO */
		}

		img {
			width: 64px;
			height: 64px;
			border-radius: 50%; /* 50% DEIXA A IMAGEM CIRCULAR */
		}

		div {
			margin: 0 16px;
			flex: 1;

			strong {
				font-size: 20px;
				color: #3d3d4d;
			}

			p {
				font-size: 18px;
				color: #a8a8b3;
				margin-top: 4px;
			}

			/* TODO ICONE POSSUI ESTE FORMATO */
			svg {
				margin-left: auto; /* FAZ SE ALINHAR PARA A DIREITA */
				color: #cbcbd6;
			}
		}
	}
`;
