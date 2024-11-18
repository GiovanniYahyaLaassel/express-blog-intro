//Importo express
const express = require('express');

const app = express();


app.get('/',(req, res) =>{
    res.send('server del mio blog');
    
});

app.listen(3000,() =>{
    console.log('Server in esecuzione sulla porta: http://localhost:3000');
});


// Creo i post
const posts = [
    {
        title: 'Ciambellone della nonna',
        content: 'Un dolce buono per la colazione',
        image: 'pubblic\images\ciambellone.jpeg',
        tags: ['tag1', 'tag2', 'tag3']

    },
    {
        title: 'Cracker di Barbabietole',
        content: 'Snack',
        image: 'pubblic\images\cracker_barbabietola.jpeg',
        tags: ['tag4', 'tag5', 'tag6']

    },
    {
        title: 'Pane Fritto Dolce',
        content: 'Una delizia fritta',
        image: 'pubblic\images\pane_fritto_dolce.jpeg',
        tags: ['tag7', 'tag8', 'tag9']

    },
    {
        title: 'Pasta di Barbabietola',
        content: 'Pasta colorata',
        image: 'pubblic\images\pasta_barbabietola.jpeg',
        tags: ['tag10', 'tag11', 'tag12']

    },
    {
        title: 'Torta Paesana',
        content: 'La tradizione contadina',
        image: 'pubblic\images\torta_paesana.jpeg',
        tags: ['tag13', 'tag14', 'tag15']

    },
]

app.get('/posts', (req, res) => {
    res.json(posts);
})

// Creo una rotta bacheca 
app.get('/bacheca', (req, res) => {
    const response = {
        count: posts.length,  //conto i post
        posts: posts // la lista
    };

    res.json(response);  
}); 


// configuro gli asset statici per far vedere le immagini

app.use(express.static('pubblic'));