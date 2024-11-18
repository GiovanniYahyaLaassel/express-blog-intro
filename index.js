//Importo express
const express = require('express');

const app = express();


app.get('/',(req, res) =>{
    res.send('server del mio blog');
    
});

app.listen(3000,() =>{
    console.log('Server in esecuzione sulla porta 3000');
})