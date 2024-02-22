


const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
    bidName: {
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
        type: mongoose.mongo.objectID,
        required: [true, "project you are creating must have duration"]

    },
    bids: [Object],
    hidden: {
        type: Boolean,
        default: false
    }

})

// creating model 
const Bid = mongoose.model("Bid", bidSchema);

module.exports = User

















