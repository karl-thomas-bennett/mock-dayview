import request from 'superagent'

export function getWorklogs(){
    return request.get('/api/worklogs').then(response => response.body)
}

export function postWorklog(worklog){
    return request.post('/api/worklogs').send(worklog).then(() => console.log("Request sent"))
}