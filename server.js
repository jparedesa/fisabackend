const express = require("express");
const bodyParser =  require('body-parser')
const app = express();
const deviceRoute = require('./routes/devices')
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/api/device', deviceRoute());


const server = app.listen(port, function(){
    console.log('Server iniciado correctamente ' + port);
})


