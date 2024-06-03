const express = require('express');
const givMeFiles = require('./utils');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/docs',(req, res)=>{
   res.json(givMeFiles('F:/project/app/backend/data'))
})
app.post('/docs',(req, res)=>{
    console.log(req.body)
 })

app.listen(8080)