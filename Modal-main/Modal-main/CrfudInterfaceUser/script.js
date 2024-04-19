//LOGICA DE CADASTRO DE USUARIO

//Abrir modal
//inserir informações 
//clicar no botão salvar
//salvar os dados no locastorage
//fechar modal
//recarregar oagina

//FUNÇÃO DE EXIBIR USUARIOS
//pegar os itens no localstorage(getItem)
// colocar os dados dentro de um array
//ultilizar os metodo forEach para percorrer o array
//criar a  tabela usando o Dom(id do tbody)

//FUNCTION UPDATEUSERINFO(){
    //CLICAR NO BOTÃO
    //ABRIR O MODAL
    //SETAR OS CAMPOS COM OS VALORES DO USUÁRIO DO LOCAL STORAGE
    //TROCAR O BOTÃO SALVAR PARA ATUALIZAR
    //SALVAR INFORMAÇÕES NO LOCALSTORAGE
    //FECHAR O MODAL
    //RECARREGAR A PAGINA
//}
const openModal = () => {
    document.getElementById('modal').classList.add('active')
}

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}

document.getElementById('cadastrarUsuario').addEventListener('click', openModal);

document.getElementById('modalClose').addEventListener('click', closeModal);

//INSERIR DADOS NO LOCALSTORAGE

function cadastrarUsuarios(usuario) {
  
    let dados = []

    if (localStorage.getItem("cadastro")) {

        dados = JSON.parse(localStorage.getItem("cadastro"));
    }

    // PUXANDO DADOS PRO ARRAY
    dados.push(usuario)

    localStorage.setItem("cadastro",JSON.stringify(dados))
}

const atualizar = () =>{

    let listaUsuario = []

    if(localStorage.getItem("registroUsuario")){

        listaUsuario = JSON.parse(localStorage.getItem("registroUsuario"))
    }

    BuildTable (listaUsuario)
}

    window.addEventListener('DOMContentLoaded', () => atualizar())

