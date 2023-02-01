//comandos para executar no terminal:
//para iniciar o terminal: npm init
//comando para instalar pacotes: npm install chalk
//comando para instalar pacotes: npm install readline-sync
//comando para rodar: node .\index.js


//importando os pacotes e definindo 
import readlineSync from "readline-sync"
const propriedades = [];
let input = "";

//definindo mensagens que irão aparecer no terminal ao código.

console.log("Digite uma propriedade CSS ou digite 'SAIR' para finalizar.")
//enquanto a mensagem for diferente de 'SAIR' ele irá retornar a mensagem para digitar uma propriedade.
//se a condição 1 for falsa o retorno será a lista de propriedades.
while(input.toLowerCase()!=="sair"){
    input = readlineSync.question("Digite uma propriedade CSS:");
    if (input.toLowerCase()!=="sair"){
        propriedades.push(input);
    }
}
//o sort ordenará a lista ordenada.
console.log("Lista ordenada de propriedades CSS:")
console.log(propriedades.sort().join("\n"));
