const modalMenu = document.querySelector('.secao__modal__menu');
const modalConteudoMenu = document.querySelector('.container__conteudo__modal__menu');

function abreMenu(){
    modalMenu.style.display = ` flex `
    modalConteudoMenu.style.display = ` flex `
}

function fechaMenu(){
    modalMenu.style.display = ` none `
    modalConteudoMenu.style.display = ` none `
}