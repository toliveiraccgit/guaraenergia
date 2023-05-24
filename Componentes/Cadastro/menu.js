const conteudoMenu = document.querySelector('.secao__menu__aberto__mobile');

function abreMenu(){
    conteudoMenu.style.visibility = ` visible `
    conteudoMenu.style.opacity = ` 1 `
    conteudoMenu.style.top = ' 0rem '
}

function fechaMenu(){
    conteudoMenu.style.visibility = ` hidden `
    conteudoMenu.style.opacity = ` 0 `
    conteudoMenu.style.top = ' -1rem '
}