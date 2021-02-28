const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create song Schema and Model
const CharitySchema = new Schema({
    name: {
        type:String,
        required:[true,'Name field is required']
    },
    email: {
        type:String,
        required:[true,'Email field is required']
    },
    description: {
        type:String,
        default:""
    },
    phoneNumber: {
        type:String,
        required:[true,'phoneNumber field is required']
    },
    city:{
        type:String,
        required:[true,'city field is required']
    },
    password1:{
        type:String,
        required:[true,'Password field is required']
    },
    confirmPassword:{
        type:String,
        required:[true,'Confirm Password field is required']
    }
});

const Charity = mongoose.model('Charity', CharitySchema);
module.exports = Charity;