//para mostrar apenas uma variavel, tipo o titulo = .titulo
//para voce comentar uma variavel no arquivo para html usa ${dados[0].titulo}

function pesquisar() {
    //console.log(dados);
    //document.getElementById = dentro do arquivo html buscar pelo id ("")
    // Busca a seção onde os resultados serão exibidos.
    // O elemento com o ID "resultados-pesquisa" será o container para os resultados.
    let section = document.getElementById("resultados-pesquisa");


    let campoPesquisa = document.getElementById("campo-pesquisa").value 
    if (!campoPesquisa) {
        section.innerHTML = "<p> Nada foi encontrado. Você precisa digitar algo ... </p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma string vazia para armazenar os resultados formatados em HTML.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item (dado) da lista de dados (provavelmente um array).
    // Para cada dado, cria um novo elemento HTML com as informações do resultado.
    //para cada dado dentro da lista de dados.
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa
        //então, faça ...
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Constrói uma string de HTML para cada resultado, incluindo:
            // - Um título (h2) com um link para mais informações.
            // - Uma descrição (p) com a classe "descricao-meta".
            // - Um link para mais informações.
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank"> ${dado.titulo} </a>
                </h2>
                <p class="descricao-meta">${dado.descricao} </p>
                <a href=${dado.link}  target="_blank">Mais informações</a>
            </div> 
         `;
        }
    }

    if (!resultados) {
        resultados = "<p> Nada foi encontrado </p>"
    }

    // Atribui a string com todos os resultados ao conteúdo HTML da seção.
    // Isso substitui o conteúdo anterior da seção pelos novos resultados.
    section.innerHTML = resultados;
}





// foto perfil 

const uploadPhoto = document.getElementById('upload-photo');

uploadPhoto.addEventListener('change', () => {
    const reader = new FileReader();
    reader.onload = (e) => {
        document.getElementById('profile-pic').src = e.target.result;
    };
    reader.readAsDataURL(uploadPhoto.files[0]);
});


//previsao do clima ///////////////////////////////////
const key = "64d6a970c4878f69bc82ea7739b9fcfa";


function colocarDadosNaTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;

    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "° C" + "  agora";

    document.querySelector(".max-min").innerHTML = "Max.: " + Math.floor(dados.main.temp_max) + " / " + "Min.: " + Math.floor(dados.main.temp_min);

    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;

    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%" + " - " + "Vento: " + dados.wind.speed + "km/h";

    document.querySelector(".icone").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}



async function buscarCidade(cidade) {
    const key = "64d6a970c4878f69bc82ea7739b9fcfa";

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    
    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}




//document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;

//document = html
//queryselector = selecionar algo no html
// (".cidade") = a class selecionada do html














// VARIÁVEIS => Um espaço da memória do computador que guardamos algo (um numero, uma letra, um texto, uma imagem)
// FUNÇÃO => Um trecho de código que só é executado quando é chamado




/****** calendario ***** */

function adicionarTarefa() {
   let resposta = confirm("Deseja adicionar um evento ?");

   if (resposta) {
    console.log(" O usuário confirmou");
    //ok
   } else {
    ContentVisibilityAutoStateChangeEvent.log(" O usuário cancelou");
   }
};