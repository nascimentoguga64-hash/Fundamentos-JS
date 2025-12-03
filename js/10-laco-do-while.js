// Sobre o laço do...while (Faça...enquanto)


/*
  sintaxe:

  do{
    // bloco de código que será executado 
    } while(condição)


    while(condição){
    // bloco de código que será executado
    }
*/

// let senha;

//do{
//   senha = prompt("Digite sua senha: ");
// } while (senha !== "1234");


let opcao;
do {
    opcao = prompt(`
        1 - comprar 
        2 - vender
        0 - encerrar atendimento
    `);

    console.log(opcao);
} while (opcao !== "0");