import axios from "axios";

// https://viacep.com.br/ws/99999999/json/     * trocar o 99999999 pelo cep desejado

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})

export default api
