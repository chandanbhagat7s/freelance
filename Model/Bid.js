


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
        required: [true, "project you are creating must have duration"]

    },
    bids: {
        type: [mongoose.mongo.ObjectId],
        ref: 'User'

    },
    hidden: {
        type: Boolean,
        default: false
    }

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

















