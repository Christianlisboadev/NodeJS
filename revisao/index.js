const express = require('express');
const server = express();

server.get('/curso/:id', (req, res)=>{

    const id = req.params.id
    const nome = req.query.nome

    return res.json(
        {curso: `Curso de ${nome}: ${id}`}
    )

})

server.listen(3000)