"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const historico = [];
function mostrarMenu() {
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
function obterNumero(mensagem) {
    return readlineSync.questionFloat(mensagem);
}
function calcular() {
    let opcao;
    do {
        mostrarMenu();
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
                }
                else {
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
                }
                else {
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
                }
                else {
                    historico.forEach((op, i) => {
                        console.log(`${i + 1}. [ ${op.data.toLocaleString()}] ${op.tipo}: ${op.entrada} = ${op.resultado}`);
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
