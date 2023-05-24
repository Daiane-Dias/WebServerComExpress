const express = require('express'); 
const app = express();

 let port = 3000;

app.get('/',(req,res) =>{
res.send("Olá!Seja bem-vindo");
});

app.get('/sobre',(req,res) =>{
    res.send("<h1>Você esta numa página sobre!<h1>");
    });
    
    app.get('/json',(req,res) =>{
        res.status(200).json({usuario: "day",id: 1234});
        });

    app.get('/ab[0-9]cd',(req,res) =>{
    res.send("Essa e uma expressao regular!");
    });
   
    let params_module = require('./params.js');
    app.use('/',params_module);

    app.post('/post/teste_post',(req,res) =>{
        res.send("Você acessou uma pagina via metodo post");
        });
      
app.get('*',(req,res) =>{
res.send("Link inválido: 404");
});
app.listen(port,()=> console.log(`Escutando na porta ${port}`));