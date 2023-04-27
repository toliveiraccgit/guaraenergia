export class Cadastro {
    constructor() {
        this.secaoBackgroundCadastro = document.querySelector('.secao__background__cadastro')
        this.secaoFormulario = document.querySelector('.secao__formulario')
        /*------------------------DADOS---------------------*/
        this.secaoDados = document.querySelector('#etapas__formulario__dados')
        this.secaoSimulacao = document.querySelector('#etapas__formulario__simulacao')
        this.secaoFinalizacao = document.querySelector('#etapas__formulario__finalizacao')
        
        this.botaoAvancaDados = document.querySelector('.botao__form__dados')
        this.botaoAvancaSimulacao = document.querySelector('.botao__form__simulacao')
        this.botaoAvancaFinalizacao = document.querySelector('.botao__form__finalizacao')


        this.botaoAvancaDados.addEventListener('click', this.avancaPassosDados.bind(this))
        this.botaoAvancaSimulacao.addEventListener('click', this.avancaPassosSimulacao.bind(this))





        this.botaoBarraDados = document.querySelector('#botao__seus__dados')
        this.botaoBarraVoltaSimulacao = document.querySelector('#botao__simulacao')
        this.botaoBarraVoltaDados = document.querySelector('#botao__volta__dados')

        this.barraDados = document.querySelector('#barra-dados')
        this.barraSimulacao = document.querySelector('#barra-simulacao')
        this.barraFinalizacao = document.querySelector('#barra-finalizacao')

        this.botaoBarraDados.addEventListener('click', this.voltaPassosDados.bind(this))
        this.botaoBarraVoltaSimulacao.addEventListener('click', this.voltaPassosParaSimulacao.bind(this))
        this.botaoBarraVoltaDados.addEventListener('click', this.voltaPassosParaDados.bind(this))
    }

    avancaPassosDados(){
        const secaoDados = this.secaoDados
        const secaoSimulacao = this.secaoSimulacao
        
        secaoDados.style.animation = ` animaSecaoDados .8s ease-in-out forwards `
        secaoSimulacao.style.animation = ' animaSecaoSimulacao .8s ease-in-out forwards'




        const barraDados = this.barraDados
        const barraSimulacao = this.barraSimulacao

        barraDados.style.display = 'none'
        barraSimulacao.style.display = 'flex'

        
        const botaoAvancaDados = this.botaoAvancaDados
        const botaoAvancaSimulacao = this.botaoAvancaSimulacao

        botaoAvancaDados.style.display = 'none'
        botaoAvancaSimulacao.style.display = 'block'
    }
    voltaPassosDados(){
        const secaoDados = this.secaoDados
        const secaoSimulacao = this.secaoSimulacao

        secaoDados.style.animation = ' animaSecaoDadosReverse .8s ease-in-out forwards '
        secaoSimulacao.style.animation = ' animaSecaoSimulacaoReverse .8s ease-in-out forwards'




        const barraDados = this.barraDados
        const barraSimulacao = this.barraSimulacao
  
        barraDados.style.display = 'flex'
        barraSimulacao.style.display = 'none'

        const botaoAvancaDados = this.botaoAvancaDados
        const botaoAvancaSimulacao = this.botaoAvancaSimulacao

        botaoAvancaDados.style.display = 'block'
        botaoAvancaSimulacao.style.display = 'none'
    }

    /*----------------------SECAO-FINALIZACAO---------------------*/
    voltaPassosParaDados(){
        const secaoDados = this.secaoDados
        const secaoBackgroundCadastro = this.secaoBackgroundCadastro
        const secaoFormulario = this.secaoFormulario

        const secaoSimulacao = this.secaoSimulacao
        const secaoFinalizacao = this.secaoFinalizacao

        secaoDados.style.animation = ' animaSecaoDadosReverse .8s ease-in-out forwards '
        secaoSimulacao.style.animation = ' animaSecaoSimulacaoReverse .8s ease-in-out forwards'
        secaoFinalizacao.style.animation = ' animaSecaoFinalizacaoReverse .8s ease-in-out forwards'

        secaoBackgroundCadastro.style.display = ' block '
        secaoFormulario.style.width = ' 50% '

        const barraDados = this.barraDados
        const barraSimulacao = this.barraSimulacao
        const barraFinalizacao = this.barraFinalizacao
        
        barraDados.style.display = 'flex'
        barraSimulacao.style.display = 'none'
        barraFinalizacao.style.display = 'none'
        
        const botaoAvancaSimulacao = this.botaoAvancaSimulacao
        const botaoAvancaFinalizacao = this.botaoAvancaFinalizacao
        const botaoAvancaDados = this.botaoAvancaDados

        botaoAvancaDados.style.display = 'block'        
        botaoAvancaSimulacao.style.display = 'none'
        botaoAvancaFinalizacao.style.display = 'none'
    }
    voltaPassosParaSimulacao(){
        const secaoBackgroundCadastro = this.secaoBackgroundCadastro
        const secaoFormulario = this.secaoFormulario

        const secaoSimulacao = this.secaoSimulacao
        const secaoFinalizacao = this.secaoFinalizacao

        secaoSimulacao.style.animation = ' animaVoltaSimulacao .8s ease-in-out forwards'
        secaoFinalizacao.style.animation = ' animaSecaoFinalizacaoReverse .8s ease-in-out forwards'

        secaoBackgroundCadastro.style.display = ' block '
        secaoFormulario.style.width = ' 50% '

        const barraSimulacao = this.barraSimulacao
        const barraFinalizacao = this.barraFinalizacao
  
        barraSimulacao.style.display = 'flex'
        barraFinalizacao.style.display = 'none'
        
        const botaoAvancaSimulacao = this.botaoAvancaSimulacao
        const botaoAvancaFinalizacao = this.botaoAvancaFinalizacao

        
        botaoAvancaSimulacao.style.display = 'block'
        botaoAvancaFinalizacao.style.display = 'none'
    }
    avancaPassosSimulacao(){
        const secaoBackgroundCadastro = this.secaoBackgroundCadastro
        const secaoFormulario = this.secaoFormulario

        const secaoSimulacao = this.secaoSimulacao
        const secaoFinalizacao = this.secaoFinalizacao

        secaoSimulacao.style.animation = ' animaAvancaSimulacao .2s linear forwards'
        secaoFinalizacao.style.animation = ' animaSecaoFinalizacao .8s ease-in-out forwards'

        secaoBackgroundCadastro.style.display = ' none '
        secaoFormulario.style.width = ' 100% '

        const barraSimulacao = this.barraSimulacao
        const barraFinalizacao = this.barraFinalizacao
        const barraDados = this.barraDados
  
        barraDados.style.display = 'none'
        barraSimulacao.style.display = 'none'
        barraFinalizacao.style.display = 'flex'
        
        const botaoAvancaSimulacao = this.botaoAvancaSimulacao
        const botaoAvancaFinalizacao = this.botaoAvancaFinalizacao
        const botaoAvancaDados = this.botaoAvancaDados

        botaoAvancaDados.style.display = 'none'        
        botaoAvancaSimulacao.style.display = 'none'
        botaoAvancaFinalizacao.style.display = 'block'
    }

    
}