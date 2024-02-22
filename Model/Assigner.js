


const mongoose = require('mongoose');

const assignSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "user must have a username"],
        unique: [true, "the username already exits please try diffrent"]

    },
    email: {
        type: String,
        required: [true, "user must have a email"],
        unique: [true, "the user with this email already exits please try diffrent"]
    },
    phone: {
        type: String,
        required: [true, "user must provide mobile number"],
        unique: [true, "the user with this mobile number  already exits please try diffrent"]
    },
    age: {
        type: String,
        required: [true, "user must provide his/her age"],
    },
    bio: {
        type: String,
        required: [true, "user must provide his/her bio"],
    },
    photo: {
        type: String
    },
    type: {
        type: String,
        default: "assigner"
    },


})

// creating model 
const Assign = mongoose.model("Asign", assignSchema);

module.exports = User

















