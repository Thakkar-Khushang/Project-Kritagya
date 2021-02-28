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
    res.render("sign-inUser.hbs");
})

app.get("/charities/register",(req,res) =>{
    res.render("charitiesReg.hbs");
})

app.get("/charities/login",(req,res) =>{
    res.render("sign-inCharities.hbs");
})

app.get("/charities/display/chennai",(req,res) =>{
    res.render("charityList.hbs");
})

app.get("/ch1",(req,res) =>{
    res.render("Charity1.hbs");
})

app.get("/ch2",(req,res) =>{
    res.render("Charity2.hbs");
})

app.get("/charities/pay",(req,res) =>{
    amt = req.query.amt;
    res.render("payment.hbs",{"amount":amt});
})

app.get("/stores",(req,res) =>{
    res.render("stores.hbs");
})

app.get("/team",(req,res) =>{
    res.render("team.hbs");
})



//error handling middleware
// app.use(function(err,req,res,next){
//     //console.log(err)
//     res.status(422).send({error:err._message});
// });

//listening to requests
app.listen(process.env.PORT || 3000, function(){
    console.log("Now listening for requests")
})