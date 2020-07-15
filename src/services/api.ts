import axios from 'axios';

// CRIA O ACESSO COM O BANDO DE DADOS DA GITHUB
const api = axios.create({
	baseURL: 'https://api.github.com',
});

export default api;
