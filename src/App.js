import './App.css'
import { useState } from 'react';
import { FiSearch } from "react-icons/fi"

import Api from './services/Api'

function App() {

    const [inputCep, setInputCep] = useState('')
    const [cep, setCep] = useState({})

    async function handleSearch() {
        if (inputCep === '') {
            alert('Preencha algum cep!')
            return
        }
        try {
            const response = await Api.get(`${inputCep}/json`)
            setCep(response.data)
            setInputCep('')

            console.log(response.data)
        }catch{
            alert('Ops! Houve um erro ao buscar cep!')
            setInputCep('')
        }
    }

    return (
        <div className="container">
            <h1 className="title">Buscador CEP</h1>
            <div className="container-input">
                <input 
                    type="text" 
                    placeholder="Digite deu cep..." 
                    value={inputCep} 
                    onChange={(event) => setInputCep(event.target.value)}
                />
                <button className="search" onClick={handleSearch}>
                    <FiSearch size={25} color="#fff"/>
                </button>
            </div>
            {Object.keys(cep).length > 0 && (
                <main className="main">
                    <h2>CEP: {cep.cep}</h2>
                    <span>Rua: {cep.logradouro}</span>
                    <span>Complemento: {cep.complemento}</span>
                    <span>{cep.bairro}</span>
                    <span>{cep.localidade} - {cep.uf}</span>
                </main>
            )}
        </div>
    );
}

export default App;
