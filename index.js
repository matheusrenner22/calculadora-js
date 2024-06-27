function Calculadora() {
    const display = document.querySelector('.display');

    const btnParaDisplay = (valor) => {
        display.value += valor;
    };

    const clearDisplay = () => {
        display.value = '';
    };

    const focusDisplay = () => {
        display.focus();
    };

    const apagaUm = () => {
        display.value = display.value.slice(0, -1);
    };

    const realizaConta = () => {
        let conta = display.value;

        try {
            conta = eval(conta);

            if (conta === undefined) {
                alert('Nenhum valor passado...');
                return;
            }

            if (conta === Infinity) {
                alert('Não é possível dividir por zero');

                clearDisplay();
                focusDisplay();

                return;
            }

            display.value = String(conta);
        } catch (error) {
            alert('Conta inválida');
            clearDisplay();
            focusDisplay();

            return;
        }
    };

    const cliqueBotoes = () => {
        document.addEventListener('click', (event) => {
            const element = event.target;

            if (element.classList.contains('btn-num')) {
                btnParaDisplay(element.innerText);
            }

            if (element.classList.contains('btn-clear')) {
                clearDisplay();
                focusDisplay();
            }

            if (element.classList.contains('btn-del')) {
                apagaUm();
            }

            if (element.classList.contains('btn-eq')) {
                realizaConta();
            }

            if (element.classList.contains('btn-like')) {
                alert('Obrigado pelo like no projeto');
                focusDisplay();
            }
        });
    };

    const pressionaEnter = () => {
        display.addEventListener('keyup', (event) => {

            if (event.keyCode === 13) {
                realizaConta();
            }
        });
    };


    this.inicia = () => {
        cliqueBotoes();
        pressionaEnter();
        focusDisplay();
    };
}

const calculadora = new Calculadora();
calculadora.inicia();