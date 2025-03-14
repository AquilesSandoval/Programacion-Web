class Calculator {
    constructor() {
        this.display = document.querySelector('.result');
        this.equation = document.querySelector('.equation');
        this.buttons = document.querySelector('.buttons');
        this.currentValue = '0';
        this.equation_value = '';
        this.hasResult = false;

        this.buttons.addEventListener('click', (e) => {
            if (!e.target.matches('button')) return;

            if (e.target.classList.contains('number')) {
                this.handleNumber(e.target.textContent);
            } else if (e.target.classList.contains('operator')) {
                const action = e.target.dataset.action;
                this.handleOperator(action, e.target.textContent);
            } else if (e.target.classList.contains('clear')) {
                this.clear();
            }
        });
    }

    handleNumber(num) {
        if (this.hasResult) {
            this.currentValue = num;
            this.equation_value = num;
            this.hasResult = false;
        } else {
            this.currentValue = this.currentValue === '0' ? num : this.currentValue + num;
            this.equation_value += num;
        }
        this.updateDisplay();
    }

    handleOperator(action, symbol) {
        switch(action) {
            case 'delete':
                if (this.currentValue.length > 1) {
                    this.currentValue = this.currentValue.slice(0, -1);
                    this.equation_value = this.equation_value.slice(0, -1);
                } else {
                    this.currentValue = '0';
                    this.equation_value = '';
                }
                break;
            case 'equals':
                try {
                    const result = eval(this.equation_value.replace('×', '*').replace('÷', '/').replace('−', '-'));
                    this.currentValue = result.toString();
                    this.equation_value = result.toString();
                    this.hasResult = true;
                } catch (error) {
                    this.currentValue = 'Error';
                    this.equation_value = '';
                    this.hasResult = true;
                }
                break;
            default:
                if (!this.equation_value.endsWith(' ') && this.equation_value !== '') {
                    this.equation_value += ' ' + symbol + ' ';
                    this.currentValue = '0';
                }
        }
        this.updateDisplay();
    }

    clear() {
        this.currentValue = '0';
        this.equation_value = '';
        this.hasResult = false;
        this.updateDisplay();
    }

    updateDisplay() {
        this.display.textContent = this.currentValue;
        this.equation.textContent = this.equation_value || '0';
    }
}

new Calculator();