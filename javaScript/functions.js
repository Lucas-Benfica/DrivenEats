let principal = 0;
let bebida = 0;
let sobremesa = 0;

function selecionarPrincipal(seletor){
    const jaSelecionado = document.querySelector('.menuPrincipal .selecionado');

    const jaCheck = document.querySelector('.menuPrincipal .selecionado .ativado');

    if(jaCheck!== null){
        jaCheck.classList.remove('ativado');
        jaCheck.classList.add('desativado');
    }
    
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }

    const selecionar = document.querySelector(seletor);
    selecionar.classList.toggle('selecionado');  

    const check = document.querySelector('.menuPrincipal .selecionado .desativado');
    check.classList.remove('desativado');
    check.classList.add('ativado');

    principal = 1;
    liberarPedido();
}

function selecionarBebida(seletor){
    const jaSelecionado = document.querySelector('.menuBebidas .selecionado');

    const jaCheck = document.querySelector('.menuBebidas .selecionado .ativado');

    if(jaCheck!== null){
        jaCheck.classList.remove('ativado');
        jaCheck.classList.add('desativado');
    }

    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    const selecionar = document.querySelector(seletor);
    selecionar.classList.toggle('selecionado');   

    const check = document.querySelector('.menuBebidas .selecionado .desativado');
    check.classList.remove('desativado');
    check.classList.add('ativado');

    bebida = 1;
    liberarPedido()
}

function selecionarSobremesa(seletor){
    const jaSelecionado = document.querySelector('.menuSobremesas .selecionado');

    const jaCheck = document.querySelector('.menuSobremesas .selecionado .ativado');

    if(jaCheck!== null){
        jaCheck.classList.remove('ativado');
        jaCheck.classList.add('desativado');
    }

    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }

    const selecionar = document.querySelector(seletor);
    selecionar.classList.toggle('selecionado');   

    const check = document.querySelector('.menuSobremesas .selecionado .desativado');
    check.classList.remove('desativado');
    check.classList.add('ativado');

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

function fecharPedido(){

    const nomePrincipal = document.querySelector('.menuPrincipal .selecionado .nome-prato');
    const nomeBebida = document.querySelector('.menuBebidas .selecionado .nome-prato');
    const nomeSobremesa = document.querySelector('.menuSobremesas .selecionado .nome-prato');

    let precoPrincipal = document.querySelector('.menuPrincipal .selecionado .preco .valor').innerHTML;
    let precoBebida = document.querySelector('.menuBebidas .selecionado .preco .valor').innerHTML;
    let precoSobremesa = document.querySelector('.menuSobremesas .selecionado .preco .valor').innerHTML;
    
    console.log(precoPrincipal);
    console.log(precoBebida);
    console.log(precoSobremesa);
    
    precoPrincipal = parseFloat(precoPrincipal.replace(',', '.'));
    precoBebida = parseFloat(precoBebida.replace(',', '.'));
    precoSobremesa = parseFloat(precoSobremesa.replace(',', '.'));
    
    console.log(precoPrincipal);
    console.log(precoBebida);
    console.log(precoSobremesa);
    
    let valorTotal = Number(precoPrincipal) + Number(precoBebida) + Number(precoSobremesa);
    //valorTotal.toFixed(2);
    let totalConvertido = valorTotal.toFixed(2).toString().replace(".", ",");

    const texto = 'Olá, gostaria de fazer o pedido:\n- Prato: ' + nomePrincipal.innerHTML
    + '\n- Bebida: ' + nomeBebida.innerHTML + '\n- Sobremesa: ' + nomeSobremesa.innerHTML
    + '\nTotal: R$ ' + totalConvertido;
    console.log(texto);

    const txt = window.encodeURIComponent(texto);
    
    window.location.href ="https://wa.me/5531988668067?text=" + txt;
}