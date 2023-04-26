const secaoDados = document.querySelector('#etapas__formulario__dados')
const secaoSimulacao = document.querySelector('#etapas__formulario__simulacao')

const botaoAvancaDados = document.querySelector('.botao__form__dados')

const botaoBarraDados = document.querySelector('#botao__dados')

const barraDados = document.querySelector('#barra-dados')
const barraSimulacao = document.querySelector('#barra-simulacao')

function avancaPassosDados(){
    const secaoDados = secaoDados
    const secaoSimulacao = secaoSimulacao
    
    const barraDados = barraDados
    const barraSimulacao = barraSimulacao

    secaoDados.style.animation = ` animaSecaoLeft .8s ease-in-out forwards `
    secaoSimulacao.style.animation = ' animaSecaoRight .8s ease-in-out forwards'

    barraDados.style.display = 'none'
    barraSimulacao.style.display = 'flex'
}
function voltaPassosDados(){
    const secaoDados = secaoDados
    const secaoSimulacao = secaoSimulacao

    const barraDados = barraDados
    const barraSimulacao = barraSimulacao

    barraDados.style.display = 'flex'
    barraSimulacao.style.display = 'none'
}
