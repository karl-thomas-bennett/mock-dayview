const express = require("express")
const path = require('path');
let  app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'));
});

server.use('/api/worklogs', worklogs)

app.listen(3000,  () => console.log("Example app listening on port 3000!"));