const axios = require('axios');

export const getCharById = (res, id)=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(char => {
        const character = {
            id:char.id,
            image:char.image,
            name:char.name,
            gender:char.gender,
            species:char.species
        }

        return character
    })
    .then(response => {
        console.log(response)
        response.writeHead(200, {"Content-Type":"application/json"})
        response.end(JSON.stringify(response))
    })
    .catch(err => {
        res.writeHead(500, {"Content-Type":"text/plain"})
        res.message(err)
    })

}