export class InputRadio {
    constructor() {
        
        this.inputRadioArquivo = document.querySelector('#radio-1')
        this.inputRadioValor = document.querySelector('#radio-2')

        this.conteudoRadioArquivo = document.querySelector('#input__arquivo')
        this.conteudoRadioValor = document.querySelector('#input__valor')

        this.labelRadioArquivo = document.querySelector('#label__radio-1')
        this.labelRadioValor = document.querySelector('#label__radio-2')


        this.inputRadioArquivo.addEventListener('click', this.abrirConteudoRadio.bind(this))
        this.inputRadioValor.addEventListener('click', this.abrirConteudoRadio.bind(this))

    }

    abrirConteudoRadio(){
        const conteudoRadioArquivo = this.conteudoRadioArquivo
        const inputRadioArquivo = this.inputRadioArquivo

        const labelRadioArquivo = this.labelRadioArquivo
        const labelRadioValor = this.labelRadioValor
    
        
        if(inputRadioArquivo.checked == true ){
            conteudoRadioArquivo.style.display = ` block `
            conteudoRadioArquivo.style.opacity = ` 1 `
            labelRadioArquivo.style.color = ' #064A3C '
        }else{
            conteudoRadioArquivo.style.display = ` none `
            conteudoRadioArquivo.style.opacity = ` 0 `
            labelRadioArquivo.style.color = ' #7A8594 '
        }
    
        const conteudoRadioValor = this.conteudoRadioValor
        const inputRadioValor = this.inputRadioValor
    
        
        if(inputRadioValor.checked == true ){
            conteudoRadioValor.style.display = ` block `
            conteudoRadioValor.style.opacity = ` 1 `
            labelRadioValor.style.color = ' #064A3C '
        }else{
            conteudoRadioValor.style.display = ` none `
            conteudoRadioValor.style.opacity = ` 0 `
            labelRadioValor.style.color = ' #7A8594 '
        }
         
    
    }
    
}