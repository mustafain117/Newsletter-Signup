const express = require('express');
const bodyParser = require('body-parser')
const request = require('request')

const app = express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/signup.html')
})

app.post('/', function(req,res){
    console.log(req.body.firstName)
    console.log(req.body.lastName)
    console.log(req.body.email)
    res.send("<h1>Thanks for signing up</h1>")
})




app.listen('3000', function(req,res){
    console.log("Server started on port 3000");
})
 