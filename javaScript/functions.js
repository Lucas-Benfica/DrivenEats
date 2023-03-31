function selecionarPrincipal(seletor){
    const jaSelecionado = document.querySelector('.menuPrincipal .selecionado');
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    const selecionar = document.querySelector(seletor);

    selecionar.classList.toggle('selecionado');   
}
function selecionarBebida(seletor){
    const jaSelecionado = document.querySelector('.menuBebidas .selecionado');
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    const selecionar = document.querySelector(seletor);

    selecionar.classList.toggle('selecionado');   
}
function selecionarSobremesa(seletor){
    const jaSelecionado = document.querySelector('.menuSobremesas .selecionado');
    if(jaSelecionado !== null){
        jaSelecionado.classList.remove('selecionado');
    }
    const selecionar = document.querySelector(seletor);

    selecionar.classList.toggle('selecionado');   
}
