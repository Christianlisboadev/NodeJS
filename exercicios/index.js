
const express = require('express');

const server = express();

// Query params = ?nome=NodeJS
// Route params = /curso/2
// Request Body = { nome: 'NodeJS', tipo: 'Backend' }

// CRUD -> Create, Read, Update, Delete

const cursos = ['NodeJS', 'JavaScript','PHP', 'React Native'];


server.get('/cursos', (req, res)=>{
    return res.json(cursos)
});


server.get('/cursos/:index', (req, res)=>{

    const {index} = req.params;

    return res.json(cursos[index]);

});

/// pesquisar post, request, push e .body

server.post(('/cursos'), (req, res)=>{
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos)
});


server.listen(3000)