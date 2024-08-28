const http = require('http')
const fs = require('fs')
const porta = process.env.PORT


const server = http.createServer((req,res)=>{
   fs.appendFile('teste.txt', 'CFB Cursos', (err)=>{
    if (err) throw err
    console.log('Arq criado')
    return res.end()
 })
})

server.listen(porta || 3000, ()=>{console.log('Servidor rodando')})