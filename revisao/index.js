const express = require('express');

const server = express();

//Query params = ?nome=nodeJS
//Route params = /1234
//Request Body = {nome: 'nodeJS', tipo: 'backend'}

// CRUD -> Create, Read, Update e Delete

const cursos = ['NodeJS', 'JAVA', 'React Native']

server.get('/curso/:index', (req, res)=>{

    const { index } = req.params;

    return res.json(cursos[index])
})


server.listen(3000)
