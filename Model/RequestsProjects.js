const { default: mongoose } = require("mongoose");



const requestProjectSchma = new mongoose.Schema({
    freeDeadlin: {
        type: String,
        required: [true, "Please provide Your deadline"]
    },
    freeDesc: {
        type: String,
        required: [true, "Please provide Your description"]

    },
    freePrice: {
        type: String,
        required: [true, "Please provide Your Price"]

    },
    assignId: {
        type: mongoose.mongo.ObjectId,
        ref: "Assign",
        required: [true, "Requested Project must belong to perticular assigner"]
    },
    userId: {
        type: mongoose.mongo.ObjectId,
        ref: "User",
        required: [true, "Requested Project must belong to perticular user"]
    },
    bidId: {
        type: mongoose.mongo.ObjectId,
        ref: "Bid",
        required: [true, "Requested Project must belong to perticular Project"]
    }
})





const RequestProject = mongoose.model("RequestProject", requestProjectSchma);
module.exports = RequestProject

















