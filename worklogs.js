const express = require('express')
const router = express.Router()
const fs = require('fs');
const { DateTime } = require('luxon')

module.exports = router

router.get('/', (request, response) => {
    fs.readFile('./data.json', (err, data) => {
        if(err){
            response.sendStatus(500);
        }
        response.json(JSON.parse(data.toString()));
    })
})

router.post('/', (request, response) => {
    fs.readFile('./data.json', (err, data) => {
        if(err){
            response.sendStatus(500);
            return;
        }
        let object = JSON.parse(data.toString());
        
        object = object.filter(o => o.minutes !== request.body.minutes)
        console.log(request)
        object.push({title: request.body.title, minutes: request.body.minutes})
        fs.writeFile('./data.json', JSON.stringify(object), err => {
            if(err){
                console.log(err)
                response.sendStatus(500)
            } else{
                console.log("Data saved")
            }
        })
        response.sendStatus(200)
    })
})