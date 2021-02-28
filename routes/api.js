const express = require('express');
const router = express.Router();
const Charity = require('../models/charity');
const Shop = require('../models/shop');
const User = require('../models/user');

//get all the charities from db
router.get('/charities/all', function(req, res, next){
    Charity.find({}).then(function(charities){
        return(res.send(charities));
    });
});

//get one charity by object id
router.get('/charities/:id', function(req, res, next){
    Charity.findById({_id:req.params.id}).then(function(charity){
        res.render("test.hbs",{"name":charity.name,"description":charity.description})
    });
});

//add a new charity to db
router.post('/charities', function(req, res, next){
    const pass = req.body.password1;
    const cpass = req.body.confirmPassword;
    if(pass == cpass){
    Charity.create(req.body).then(function(){
        res.render('home.hbs');
    }).catch(next);
    }
    else{
        res.render("charitiesReg.hbs", {"alert":"Passwords not matching"});
    }
});

//delete a charity from db
router.delete('/charities/:id', function(req, res, next){
    Charity.findByIdAndRemove({_id:req.params.id}).then(function(charity){
        res.send(charity);
    });
});

//add a new user to db
router.post('/users', function(req, res, next){
    var msg = {}
    const pass = req.body.password1;
    const cpass = req.body.confirmPassword;
    if(pass == cpass){
    User.create(req.body).then(function(){
        res.render('home.hbs');
    }).catch(next);
    }
    else{
        res.render("userReg.hbs", {"alert":"Passwords not matching"});
    }
});

//check for user name and password
router.get('/users/login', function(req, res, next){
    User.findOne({"email":req.query.email,"password1":req.query.password1}, function(err,user){
        if(err) throw err;
        if(user && user._id){
            if(req.query.password1==user["password1"]){
                res.render("charityList.hbs");
            }else{
                res.send("Invalid Login")
            }
        }else{
            res.render("sign-in.hbs",{"alert":"Invalid Email or Password"})
        }
    });
});

//delete a user from db
router.delete('/users/:id', function(req, res, next){
    User.findByIdAndRemove({_id:req.params.id}).then(function(user){
        res.send(user);
    });
});

//get all the shops from db
router.get('/shops', function(req, res, next){
    Shop.find({}).then(function(shops){
        res.send(shops);
    });
});

//get one shop by object id
router.get('/shops/search', function(req, res, next){
    Shop.find({name:req.query.name}) .then(function(shop){
        res.send(shop);
    });
});

//add a new shop to db
router.post('/shops', function(req, res, next){
    Shop.create(req.body).then(function(shop){
        res.send(shop);
    }).catch(next);
});

//delete a shop from db
router.delete('/shops/:id', function(req, res, next){
    Shop.findByIdAndRemove({_id:req.params.id}).then(function(shop){
        res.send(shop);
    });
});

module.exports = router;