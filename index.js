const readline = require("readline-sync");

let aluno1Nome = readline.question("Digite o nome do 1º aluno: ");
let aluno1Idade = readline.question("Digite a idade do 1º aluno: ");

let aluno2Nome = readline.question("Digite o nome do 2º aluno: ");
let aluno2Idade = readline.question("Digite a idade do 2º aluno: ");

let aluno3Nome = readline.question("Digite o nome do 3º aluno: ");
let aluno3Idade = readline.question("Digite a idade do 3º aluno: ");

console.log("Alunos Cadastrados");
console.log("1° Aluno: " + aluno1Nome + " - Idade: " + aluno1Idade);
console.log("2° Aluno: " + aluno2Nome + " - Idade: " + aluno2Idade);
console.log("3° Aluno: " + aluno3Nome + " - Idade: " + aluno3Idade);

let totalAprovados = 0;
let totalRecuperacao = 0;
let totalReprovados = 0;

let Aluno1nota1 = 8;
let Aluno1nota2 = 6;
let Aluno1nota3 = 10;

let media1 = (Aluno1nota1 + Aluno1nota2 + Aluno1nota3) / 3;

console.log("A média do Aluno 1 é: " + media1);

if (media1 >= 7) {
  console.log("Situação: Aprovado");
  totalAprovados = totalAprovados + 1;
} else if (media1 >= 5) {
  console.log("Situação: Recuperação");
  totalRecuperacao = totalRecuperacao + 1;
} else {
  console.log("Situação: Reprovado");
  totalReprovados = totalReprovados + 1;
}

let Aluno2nota1 = 7;
let Aluno2nota2 = 6;
let Aluno2nota3 = 7;

let media2 = (Aluno2nota1 + Aluno2nota2 + Aluno2nota3) / 3;

console.log("A média do Aluno 2 é: " + media2);

if (media2 >= 7) {
  console.log("Situação: Aprovado");
  totalAprovados = totalAprovados + 1;
} else if (media2 >= 5) {
  console.log("Situação: Recuperação");
  totalRecuperacao = totalRecuperacao + 1;
} else {
  console.log("Situação: Reprovado");
  totalReprovados = totalReprovados + 1;
}

let Aluno3nota1 = 3;
let Aluno3nota2 = 8;
let Aluno3nota3 = 2;

let media3 = (Aluno3nota1 + Aluno3nota2 + Aluno3nota3) / 3;

console.log("A média Aluno 3 é: " + media3);

if (media3 >= 7) {
  console.log("Situação: Aprovado");
  totalAprovados = totalAprovados + 1;
} else if (media3 >= 5) {
  console.log("Situação: Recuperação");
  totalRecuperacao = totalRecuperacao + 1;
} else {
  console.log("Situação: Reprovado");
  totalReprovados = totalReprovados + 1;
}

console.log("Resumo geral da Turma");
console.log("Total de Aprovados: " + totalAprovados);
console.log("Total de Recuperação: " + totalRecuperacao);
console.log("Total de Reprovados: " + totalReprovados);



//Foi necessário a ajuda da IA "ChatGPT" pois o código estava dando o erro: "ReferenceError". Então, tive que corrigir utilizando o equire("readline-sync"), para esclarecer.//