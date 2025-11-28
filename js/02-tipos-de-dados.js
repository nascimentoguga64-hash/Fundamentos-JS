// O JavaScript possui 8 tipos de dados, sendo 7 deles, os chamados de tipos primitivos

// 1 - tipo NUMBER - usado pra numero inteiros ou decimais
let idade = 25;
let preço = 379.90;

console.log(preço);

// 2 - tipo STRING - usado para textos
let nome = "Mago"
let sobrenome = "Da Silva"
let frase = 'Apenas um teste de aspas simples ${nome}'
let frase2 = 'exemplo de string com crase ${nome}'
let nomeCompleton = '${nome} ${sobrenome}'

console.log(nome);
console.log(sobrenome);
console.log(frase);

console.log(frase2);

// 3 - tipo de BOOLEAN - usado para valores lógicos e que só pode ter duas respostas possiveis
// verdadeiro - true
// falso - false 

let maiorDeIdade = true
let aprovado = false

// 4- tipo UNDEFINED - usado para variaveis que não foram inicializados, ou seja, não receberam nenhum valor
let x
console.log(x)

x = 5
console.log(x)

// 5 - tipo NULL - usado para representar um valor nulo ou vazio

// 6 - tipo SYMBOL (símbolo) - usado para criar identificadores únicos para objetos
const id = Symbol("id");
console.log(id);

const id2 = symbol("id");
console.log(id2);

// 7 - tipo BIGINT - é usadp para representar números inteiros ENORMES, maiores que o limite do tipo NUMBER
const numeroGrande =1234568828218171239178318931;
console.log(numeroGrande)
console.log