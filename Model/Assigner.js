


const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

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
    password: {
        type: String,
        required: [true, "user must provide password "],

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

    role: {
        type: String,
        default: "assign"
    }


})




// now we are going to encrypt the password 
assignSchema.pre('save', async function (next) {

    if (!this.isModified('password')) return next() // return when user do not change password 

    this.password = await bcrypt.hash(this.password, 12)



})

// we will create an instance for checking the inputed password (basicly comparision hashpassword which is in DB with inputed) by using bcript
// this instance will be available with the document okk 
assignSchema.methods.correctPass = async function (inputedpass, acctualpassinhash) {
    return await bcrypt.compare(inputedpass, acctualpassinhash)
}

assignSchema.methods.changedPasswords = async function (jwttokentime) {
    if (this.changedPasswodTime) {
        const change = parseInt(this.changedPasswodTime.getTime() / 1000, 10)
        // console.log(jwttokentime, this.changedPasswodTime.getTime() / 1000);
        // console.log(jwttokentime, change);
        // console.log(jwttokentime < change);
        return jwttokentime < change
    }


    // if user has not change the password at least once 
    return false;
}

// midfun for modefying creaatedat
assignSchema.pre('save', function (next) {
    if (!this.isModified('password') || this.isNew) return next();

    this.changedPasswodTime = Date.now() - 1000;
    next()
})



// creating model 
const Assign = mongoose.model("Assign", assignSchema);

module.exports = Assign

















