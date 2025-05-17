import * as readlineSync from "readline-sync";


type Operacao = {
    data: Date;
    tipo: string;
    entrada: string;
    resultado: number | string;
}

const historico: Operacao[] = [];



function mostrarMenu(): void {
    console.log('\n === CALCULADORA ===');
    console.log('1. Somar');
    console.log('2. Subtração');
    console.log('3. Multiplicação');
    console.log('4. Divisão');
    console.log('5. Potência');
    console.log('6. Raiz Quadrada');
    console.log('7. Ver histórico');
    console.log('0. Sair');

}

function obterNumero(mensagem: string): number {
    return readlineSync.questionFloat(mensagem);
}

function calcular(): void {
    let opcao: number;

    do {
        mostrarMenu()
        opcao = readlineSync.questionInt('Escolha uma opção: ');

        switch (opcao) {
            case 1: {
                const a = obterNumero('Digite o primeiro número: ');
                const b = obterNumero('Digite o segundo número: ');
                console.log(`Resultado: ${a + b}`);
                historico.push({
                    data: new Date(),
                    tipo: 'Soma',
                    entrada: `${a} + ${b}`,
                    resultado: a + b,
                });
                break;
            }

            case 2: {
                const a = obterNumero('Digite o primeiro número: ');
                const b = obterNumero('Digite o segundo número: ');
                console.log(`Resultado: ${a - b}`);
                historico.push({
                    data: new Date(),
                    tipo: 'Subtração',
                    entrada: `${a} - ${b}`,
                    resultado: a - b,
                });
                break;
            }
            case 3: {
                const a = obterNumero('Digite o primeiro número: ');
                const b = obterNumero('Digite o segundo número: ');
                console.log(`Resultado: ${a * b}`);
                historico.push({
                    data: new Date(),
                    tipo: 'Multiplicação',
                    entrada: `${a} * ${b}`,
                    resultado: a * b,
                });
                break;
            }
            case 4: {
                const a = obterNumero('Digite o primeiro número: ');
                const b = obterNumero('Digite o segundo número: ');
                if (b === 0) {
                    console.log('Erro: Divisão por zero.');
                } else {
                    console.log(`Resultado: ${a / b}`);
                }
                historico.push({
                    data: new Date(),
                    tipo: 'Divisão',
                    entrada: `${a} / ${b}`,
                    resultado: a / b,
                });
                break;
            }
            case 5: {
                const base = obterNumero('Digite a base: ');
                const expoente = obterNumero('Digite o expoente: ');
                console.log(`Resultado: ${Math.pow(base, expoente)}`);
                historico.push({
                    data: new Date(),
                    tipo: 'Potência',
                    entrada: `${base} ^ ${expoente}`,
                    resultado: Math.pow(base, expoente)
                });
                break;
            }
            case 6: {
                const numero = obterNumero('Digite o número: ');
                if (numero < 0) {
                    console.log('Erro: não existe raiz quadrada de número negativo no conjunto dos reais.');
                } else {
                    console.log(`Resultado: ${Math.sqrt(numero)}`);
                }
                historico.push({
                    data: new Date(),
                    tipo: 'Raiz Quadrada',
                    entrada: `√${numero}`,
                    resultado: Math.sqrt(numero)
                });
                break;
            }
            case 7: {
                console.log('=== HISTÓRICO DE OPERAÇÕES ===');
                if (historico.length === 0) {
                    console.log('Nenhuma operação realizada ainda.');
                } else {
                    historico.forEach((op, i) => {
                        console.log(`${i + 1}. 
                            [${op.data.toLocaleString()}] 
                            ${op.tipo}: ${op.entrada} = ${op.resultado}`);
                    });
                }
                break;
            }
            case 0:
                console.log('Encerrando a calculadora...');
                break;
            default:
                console.log('Opção inválida.');
        }
    } while (opcao !== 0);
}
calcular();