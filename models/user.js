const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create song Schema and Model
const UserSchema = new Schema({
    name: {
        type:String,
        required:[true,'Name field is required']
    },
    email: {
        type:String,
        required:[true,'Email field is required']
    },
    phoneNumber: {
        type:String,
        required:[true,'phoneNumber field is required'],
    },
    city:{
        type:String,
        required:[true,'city field is required']
    },
    available:{
        type: Boolean,
        default:false
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;