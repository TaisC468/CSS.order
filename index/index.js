import readlineSync from "readline-sync"
const propriedades = [];
let input = "";

console.log("Digite uma propriedade CSS ou digite 'SAIR' para finalizar.")

while(input.toLowerCase()!=="sair"){
    input = readlineSync.question("Digite uma propriedade CSS:");
    if (input.toLowerCase()!=="sair"){
        propriedades.push(input);
    }
}

console.log("Lista ordenada de propriedades CSS:")
console.log(propriedades.sort().join("\n"));