//comandos para executar no terminal:
//para iniciar o terminal: npm init
//comando para instalar pacotes: npm install chalk
//comando para instalar pacotes: npm install readline-sync
//comando para rodar: node .\index.js


//importando os pacotes e definindo 
import readlineSync from "readline-sync"
const propriedades = [];
let input = "";


console.log("Digite uma propriedade CSS ou digite 'SAIR' para finalizar.") //definindo mensagens que irão aparecer no terminal ao código.

//o laço irá ocorrer enquanto a mensagem for diferente de 'SAIR', retornando a mensagem para digitar mais uma propriedade.
while(input.toLowerCase()!=="sair"){       
    input = readlineSync.question("Digite uma propriedade CSS:");
    //o método push recebe as propriedades e retorna uma lista
    if (input.toLowerCase()!=="sair"){
        propriedades.push(input);
    }
}
//o sort fará com que a lista retorne ordenada. 
console.log("Lista ordenada de propriedades CSS:")
console.log(propriedades.sort().join("\n"));
