const express = require('express');

const server = express();

server.use(express.json())

// Query params = ?nome=NodeJS
// Route params = /curso/2
// Request Body = { nome: 'NodeJS', tipo: 'Backend' }

// CRUD -> Create, Read, Update, Delete

const cursos = ['NodeJS', 'JavaScript','PHP', 'React Native'];


// Recuperando os dados de todos os cursos
server.get('/cursos', (req, res)=>{
    return res.json(cursos)
});


// Recuperando os dados de um curso
server.get('/cursos/:index', (req, res)=>{

    const {index} = req.params;

    return res.json(cursos[index]);

});

/// pesquisar post, request, push e .body

// Adicionando um curso
server.post(('/cursos'), (req, res)=>{
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos)
});

// Atualizando um curso
server.put('/cursos/:index', (req, res)=>{
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

// Excluindo algum curso
server.delete('/cursos/:index', (req, res)=>{
    const {index} = req.params;

    cursos.splice(index, 1)
    return res.send();
})

server.listen(3000)
