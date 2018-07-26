const fs = require("fs");

let nome = process.argv[3];
let email = process.argv[4];
let cadastro = JSON.parse(`{Nome: ${nome}, Email: ${email}}`);



fs.appendFile('pessoas.json', `${cadastro}\n`, erro =>{
     if(erro){
          console.log("Erro ao salvar cadastro. Tipo de erro:");
          console.log(erro);
     }
     else{
          console.log("Cadastro salvo com sucesso.")
     }
} )
