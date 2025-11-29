// Estruturas condicionais são recursos de programação que permitem executar diferentes blocos de código com base em condições específicas, Ou seja, serve basicamente para tomar decisões no código.

let idade = prompt("Digite a sua idade");

/* if (se) -

if(condição){
    bloco de código que será executado se a condição for verdadeiro
} */

if (idade >18) {
    alert("você é maior de idade")
}

// if composto - if/else

    /* 
    if(condição){
    bloco de código que será executado se a condição for verdadeiro }
    else{
        bloco de código que será executado se a condição NÂO for verdadeiro}
     */

let emailEsperado = "gustavo@gmail.com";
let email = prompt("digite o seu email:");

if (email === emailEsperado) {
    alert(`Seja bem vindo ${email}`);
} else {
    alert("Email inválido!")
}

let hora = 11;
if(hora >= 10){
    console.log("Bom dia");
} else {
    console.log("Boa noite");
}

// if encadeado - if/else if/else
// usamos qaundo precisamos testar várias condições diferentes

let nota = 8;
if(nota >= 9){
    console.log("Excelente!");
} else if(nota >= 7) {
    console.log("Boa nota!");
} else if(nota >= 5) {
    console.log("Você passou raspando em!");
} else  if(nota <= 4) {
    console.log("Você reprovou!");
}
    
