function criaCalculadora() {
    return {

        display: document.querySelector('.display'),

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = '';
        },

        focusDisplay() {
            this.display.focus();
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (conta === undefined) {
                    alert('Nenhum valor passado...');
                    return;
                }

                if (conta === Infinity) {
                    alert('Não é possível dividir por zero');

                    this.clearDisplay();
                    this.focusDisplay();
                    
                    return;
                }

                this.display.value = String(conta);
            } catch (error) {
                alert('Conta inválida');
                this.clearDisplay();
                this.focusDisplay();
                return;
            }

        },

        cliqueBotoes() {
            document.addEventListener('click', (event) => {
                const element = event.target;

                if (element.classList.contains('btn-num')) {
                    this.btnParaDisplay(element.innerText);
                }

                if (element.classList.contains('btn-clear')) {
                    this.clearDisplay();
                    this.focusDisplay();
                }

                if (element.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (element.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                if (element.classList.contains('btn-like')) {
                    alert('Obrigado pelo like no projeto!');
                    this.focusDisplay();    
                }
            });
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (event) => {

                if (event.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
            this.focusDisplay();
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();