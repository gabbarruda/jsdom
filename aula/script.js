// Algoritmo 
// OK 1. Pegar os valores dos inputs.
// 2. Fazer o calculo do IMC -> valorImc.
// 3. Gerar a classificação IMC -> classificacaoImc.
// 4. Organizar os dados do usuario para salvar na lista e gerar a data de cadastro.
// 5. Inserir o usuario na lista (salvar no localStorage)
// 6. Função para carregar os usuarios (localStorage), chamar ao carregar a pagina.
// 7. Renderizar o conteudo da tabela com os usuarios cadastrados.
// 8. Botão para limpar os registros (localStorage)
// trim elimina um espaço vazio na linha. 
function calcular(event) {
    event.preventDefault()
    console.log("Foi executada a função calculada")

    receberValores()
}

function receberValores() {
    let = nomeRecebido = document.getElementById("nome").value.trim()
    let = alturaRecebida = document.getElementById("altura").value
    let = pesoRecebido = document.getElementById("peso").value

    let dadosUsuario = {
        nome: nomeRecebido,
        altura:alturaRecebida,
        peso: pesoRecebido
    }

    //console.log(nomeRecebido)
   // console.log(alturaRecebida)
    //console.log(pesoRecebido)
    console.log(dadosUsuario)

    return dadosUsuario
}

function calcularImc () {
    
}


