let express = require('express');
let router = express.Router();


    
router.get('/:p',(req,res) =>{
    res.send("Você informou o parametro " + req.params.p);
    });
    
    router.get('/user/:u/nome/:n',(req,res) =>{
    res.send("Você acessou informacoes do usuario " + req.params.u +" de nome " + req.params.n);
    });
     module.exports = router;