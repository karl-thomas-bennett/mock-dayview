import request from 'superagent'

export function getWorklogs(){
    return request.get('/api/worklogs').then(response => response.body)
}