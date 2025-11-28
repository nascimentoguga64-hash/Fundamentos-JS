// Operadores Aritméticos em JavaScript
// Servem para realizar operações matemáticas básicas

// O mais comuns são:
// Adição (+)
let x = Number(prompt("digite um número:"));
console.log(typeof x);
let y = Number(prompt("Digite outro número:"));

let soma = x + y;
alert(soma);

alert(`O resultado da soma entre ${x} e ${y} é igual a: ${soma}`);
console.log(soma);

// Subtração (-)
let subtracao = x - y;
console.log(subtracao)
alert(`O resultado da subtração é: ${subtracao}`);

// Multiplicação (*)
let multiplicacao = x * y;
console.log("O resultado da multiplicação é: " + multiplicacao);

// Divisão (/) 
let divisao = x / y;
alert(`O resultado da divisão é: ${divisao}`);

// Exponenciação (**)
let exponenciacao = x ** y;
alert(`O resultado da exponenciação é: ${exponenciacao}`);

// Resto da Divisão ( % ) - Conhecido como operador de módulo. Geralmente retorna o resto de uma divisão entre dois números
let restoDivisao = x % y;
alert(restoDivisao);