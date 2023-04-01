let principal = 0;
let bebida = 0;
let sobremesa = 0



function selecionarPrincipal(seletor){
    const jaSelecionado = document.querySelector('.menuPrincipal .selecionado');
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    const selecionar = document.querySelector(seletor);

    selecionar.classList.toggle('selecionado');   

    principal = 1;
    liberarPedido()
}
function selecionarBebida(seletor){
    const jaSelecionado = document.querySelector('.menuBebidas .selecionado');
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    const selecionar = document.querySelector(seletor);

    selecionar.classList.toggle('selecionado');   

    bebida = 1;
    liberarPedido()
}
function selecionarSobremesa(seletor){
    const jaSelecionado = document.querySelector('.menuSobremesas .selecionado');
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    const selecionar = document.querySelector(seletor);

    selecionar.classList.toggle('selecionado');   

    sobremesa = 1;
    liberarPedido()
}

function liberarPedido(){

    if( (principal !== 0) & (bebida !== 0) & (sobremesa !== 0)){
        const botao = document.querySelector('.concluir');
        botao.removeAttribute('disabled');
        botao.classList.add('fecharPedido');
        botao.innerHTML = "Fechar pedido";
    }

}
