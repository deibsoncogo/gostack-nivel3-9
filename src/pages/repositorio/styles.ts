import Styled from 'styled-components';

export const Cabecalho = Styled.header`
	display: flex;
	align-items: center; /* CENTRALIZA HORIZONTALMENTE */
	justify-content: space-between; /* JOGA CADA ITEM PARA UM CANTO */

	a {
		display: felx;
		align-items: center;
		text-decoration: none;
		color: #a8a8b3;
		transition: color 0.2s;

		&:hover {
			color: #666666;
		}

		svg {
			margin-right: 4px;
		}
	}
`;

export const Informacao = Styled.section`
	margin-top: 80px;

	header {
		display: flex;
		align-items: center;

		img {
			width: 120px;
			height: 120px;
			border-radius: 50%;
		}

		div {
			margin-left: 24px;

			strong {
				font-size: 36px;
				color: #3d3d4d;
			}

			p {
				font-size: 18px;
				color: #737380;
				margin-top: 4px;
			}
		}
	}

	ul {
		display: flex;
		list-style: none;
		margin-top: 40px;

		li {

			& + li {
				margin-left: 80px;
			}

			strong {
				display: block;
				font-size: 36px;
				color: #3d3d4d;
			}

			span {
				display: block;
				margin-top: 4px;
				color: #6c6c80;
			}
		}
	}
`;

export const SubInformacao = Styled.div`
	margin-top: 80px;

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
