require('dotenv').config()

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const hbs = require('hbs');
require("./Database/server");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view options", "hbs");
app.use(express.static(path.join(__dirname, '/public')));
app.set("views", "templates/views");
hbs.registerPartials("templates/partials");

app.use(bodyParser.json());

//initialize routes
app.use('/api',require('./routes/api'));

app.get('/', (req,res) => {
    res.render("home.hbs");
});

app.get("/users/register",(req,res) =>{
    res.render("userReg.hbs");
})

app.get("/signin",(req,res) =>{
    res.render("sign-in.hbs");
})

app.get("/signup",(req,res) =>{
    res.render("sign-up.hbs");
})

app.get("/users/login",(req,res) =>{
    res.render("userLogin.hbs");
})

app.get("/charities/register",(req,res) =>{
    res.render("charitiesReg.hbs");
})

app.get("/charities/display/chennai",(req,res) =>{
    res.render("charitiesListChennai.hbs");
})




//error handling middleware
// app.use(function(err,req,res,next){
//     //console.log(err)
//     res.status(422).send({error:err._message});
// });

//listening to requests
app.listen(3000, function(){
    console.log("Now listening for requests")
})