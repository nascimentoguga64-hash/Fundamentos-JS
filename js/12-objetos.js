// Os objetos são estrututras que armazenam dados e funcionalidades, como por exemplo propriedades e metodos, em pares de CHAVE e VALOR.;

// Os obejetos servem para representar coisas do mundo real ou estruturas de dados organizados.

/* Exemplo de objetos que podem ser criados:
- usuário
- produto
- postagem
- pessoa
...etc.
*/

const pessoa = {
//chave:valor
    nome: "Arthur Coelho",
    idade: 20,
    altura: 1.70
};

// acessando informações de um obejto
// Para acessarmos informações de um objeto, passamos o nome objeto, seguindo de um ponto (.) e o nome da propriedade
console.log(pessoa.nome)
console.log(pessoa.idade);

// também é possível acessar com colchetes
console.log(pessoa["altura"]);

let prop = "idade";
console.log(pessoa[prop]);

// Exemplo de acesso com laço de repetição

const produto = {
    nome: "Linha chenille circulo",
    preco: 23.99,
    emEstoque: true,
};

for(let info in produto){
    console.log(info)

}