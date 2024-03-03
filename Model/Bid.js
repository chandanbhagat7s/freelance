


const mongoose = require('mongoose');

const projectSchem = new mongoose.Schema({
    projectName: {
        type: String,
        required: [true, "Your are creating the project for community , which must have a name"],
        maxLenght: [30, "Project name is excedding the limit"]
    },
    price: {
        type: Number,
        required: [true, "project you are creating must have price"]
    },
    duration: {
        type: String,
        required: [true, "project you are creating must have duration"]

    },
    createrId: {
        type: mongoose.mongo.ObjectId,
        ref: 'Assign',
        required: [true, "project you are creating must have Owner"]

    },
    bids: {
        type: [mongoose.mongo.ObjectId],
        ref: 'User'

    },
    hidden: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        required: [true, "please provide title of project"]
    },
    description: {
        type: String,
        required: [true, "please provide description of project"]
    },
    deadline: {
        type: String,
        required: [true, "please provide deadline of project"]
    }
    ,
    about: {
        type: String,
        required: [true, "please provide about  of project"]
    }

}, {
    timestamps: true
})


projectSchem.pre(/^find/, function (next) {
    // we define in schema the secrate field
    // converted to regEX for all find.....
    this.find({ hidden: { $ne: true } })

    next()
})


// creating model 
const Bid = mongoose.model("Bid", projectSchem);

module.exports = Bid

















