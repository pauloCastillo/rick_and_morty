const http = require('http');
const fs = require('fs');
const character = require('../utils/data')

http.createServer((req, res)=>{

    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes('rickandmorty/characters')){
        const id = req.url.split('/').at(-1)
        fs.readFile(__dirname + '/../utils/data.js', 'utf-8', (err, data)=>{
            if(data.includes(id)){
                res.writeHead(200,{'Content-Type':'application/json'})
                const detailCharacter = character.filter(el => el.id == id)
                res.end(JSON.stringify(detailCharacter[0]))
            }else{
                res.end(JSON.stringify(''))
            }
        })
    }

}).listen(3001, 'localhost');