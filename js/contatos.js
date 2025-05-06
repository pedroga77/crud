'use strict'

export async function getContatoPorNome(nome) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos?nome_like=^${nome}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function getContatos() {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
export async function postContato(contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos`
    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)
    return response.ok

}

const contatoTeste = {
    "nome": "Gustavo Miguel",
    "celular": "11 9 9999-8120",
    "foto": "../img/ana-oliveira-dias.png",
    "email": "gu@gmail.com",
    "endereco": "Av. Catagua, 805",
    "cidade": "Carapiciba"
}