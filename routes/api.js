const express = require('express');
const router = express.Router();
const Charity = require('../models/charity');
const Shop = require('../models/shop');
const User = require('../models/user');

//get all the charities from db
router.get('/charities', function(req, res, next){
    Charity.find({}).then(function(charities){
        res.send(charities);
    });
});

//get one charity by object id
router.get('/charities/search', function(req, res, next){
    Charity.find({name:req.query.name}) .then(function(charity){
        res.send(charity);
    });
});

//add a new charity to db
router.post('/charities', function(req, res, next){
    Charity.create(req.body).then(function(charity){
        res.send(charity);
    }).catch(next);
});

//delete a charity from db
router.delete('/charities/:id', function(req, res, next){
    Charity.findByIdAndRemove({_id:req.params.id}).then(function(charity){
        res.send(charity);
    });
});

//add a new user to db
router.post('/users', function(req, res, next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
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