const express = require('express')
const router = express.Router()
const fs = require('fs');

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
        let worklogs = JSON.parse(data.toString());
        if(request.body.title === 'DELETE_ALL'){
            fs.writeFile('./data.json', JSON.stringify([]), err => {
                if(err){
                    console.log(err)
                    response.sendStatus(500)
                } else{
                    console.log("Data cleared")
                }
            })
            return
        }
        
        console.log(request)
        if(request.body.title === 'DELETE_LAST'){
            worklogs.pop()
            fs.writeFile('./data.json', JSON.stringify(worklogs), err => {
                if(err){
                    console.log(err)
                    response.sendStatus(500)
                } else{
                    console.log("Data saved")
                }
            })
            return;
        }
        worklogs = worklogs.filter(o => o.minutes !== request.body.minutes)
        worklogs.push({title: request.body.title, minutes: request.body.minutes})
        fs.writeFile('./data.json', JSON.stringify(worklogs), err => {
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