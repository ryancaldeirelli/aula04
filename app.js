const enderecoUsuario = {

 rua: document.querySelector('#rua'),
 bairro: document.querySelector('#bairro'),
 cidade: document.querySelector('#cidade'),
 estado: document.querySelector('#estado'),
cep: '06539270'
}

async function consultaCEP(cep) {
    
    const url = await fetch (`https://viacep.com.br/ws/${cep}/json/`);
    const resposta = await url.json();
    let cepUsuario = {
        rua: resposta.logradouro,
        bairro: resposta.bairro,
        cidade: resposta.localidade,
        estado: resposta.estado,
    }
    enderecoUsuario.rua.innerText = cepUsuario.rua
    enderecoUsuario.bairro.innerText = cepUsuario.bairro
    enderecoUsuario.cidade.innerText = cepUsuario.cidade
    enderecoUsuario.estado.innerText = cepUsuario.estado

}

consultaCEP(enderecoUsuario.cep)

