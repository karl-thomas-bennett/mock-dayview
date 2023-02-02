const express = require("express")
const path = require('path');
const worklogs = require('./worklogs') 
let  app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/worklogs', worklogs)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'));
});



app.listen(3000,  () => console.log("Example app listening on port 3000!"));