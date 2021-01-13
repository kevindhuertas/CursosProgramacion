const { Console } = require('console');
const colors = require('colors');
const express = require('express');

const server = express();

server.get('/',function(req,res){
    res.send(`<h1>Hola con express y node.js</h1>`);
    res.end();
})
server.listen(3000, () => {
    console.log('server on port 3000'.rainbow);
})