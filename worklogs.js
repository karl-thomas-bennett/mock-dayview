const express = require('express')
const router = express.Router()
const fs = require('fs');

module.exports = router

router.get('/', (request, response) => {
    fs.readFile('./data.json', (err, data) => {
        if(err){
            response.sendStatus(500);
        }
        response.status(200).send(data);
    })
})