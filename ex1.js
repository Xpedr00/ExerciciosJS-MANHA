// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é "admin" e a senha é senha123;. 
// Exiba uma mensagem indicando se o login foi bem-sucedido ou nao.

//solicita ao usuario um nome de usuario
let username = prompt("Digite um nome de usuário: ");

//solicita ao usuario uma senha
let senha = prompt("Digite a senha: ");

//verifique se o nome de usuario e "admin" e a senha e "senha123&quot"
//caso sim - exiba a mensagem de login bem sucedida
//caso nao - exiba a mensagem de usuario ou senha incorreta
if (username == "admin" && senha == "senha123"){
    console.log("login bem sucedido")
}   else {
    console.log("você não tem permissão ao acesso!")
}

//exiba uma mensagem indicando se o login foi bem-sucedido ou não

