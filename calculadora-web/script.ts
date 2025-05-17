
type Operacao = {
    tipo: string;
    entrada: string;
    resultado: number | string;
}

const historico: Operacao[] = [];


function calcular(){
    const n1 = parseFloat((<HTMLInputElement>document.getElementById('numero1')).value);
    const n2 = parseFloat((<HTMLInputElement>document.getElementById('numero2')).value);
    const operacao = (<HTMLSelectElement>document.getElementById('operacao')).value;

    let resultado: number | string = 0;
    let entrada = "";

    switch (operacao) {
        case 'soma':
            resultado = n1 + n2;
            entrada = `${n1} + ${n2}`;
            break;
        case 'subtracao':
            resultado = n1 - n2;
            entrada = `${n1} - ${n2}`;
            break;
        case 'multiplicacao':
            resultado = n1 * n2;
            entrada = `${n1} * ${n2}`;
            break;
        case 'divisao':
            if (n2 === 0) {
                resultado = "Erro: Divisão por zero";
            } else {
                resultado = n1 / n2;
            }
            entrada = `${n1} / ${n2}`;
            break;
        case 'potencia':
            resultado = Math.pow(n1, n2);
            entrada = `${n1} ^ ${n2}`;
            break;
        case 'raiz':
            if (n1 < 0) {
                resultado = "Erro: Raiz de número negativo";
            } else {
                resultado = Math.sqrt(n1);
            }
            entrada = `√${n1}`;
            break;
    }

    const pResultado = document.getElementById('resultado')!;
    pResultado.textContent = resultado.toString();

    historico.push({ tipo: operacao, entrada, resultado })
    atualizarHistorico();
}

function atualizarHistorico() {
    const ul = document.getElementById('historico')!;
    ul.innerHTML = '';

    historico.forEach(op => {
        const li = document.createElement('li');
        li.textContent = `${op.entrada} = ${op.resultado}`;
        ul.appendChild(li);
    });
}