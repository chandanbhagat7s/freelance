const Bid = require("../Model/Bid");
const appError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");


exports.createProject = catchAsync(async (req, res, next) => {
    const { projectName, price, duration, about, description, deadline, title } = req.body;
    console.log(req.user);
    if (!projectName, !price, !duration) {
        return next(new appError("please provide all the details", 400))
    }
    const bid = await Bid.create({ projectName, price, duration, about, description, deadline, title, createrId: req.user._id, })

    if (!bid) {
        return next(new appError("bid not created please try again", 500))

    }

    res.status(200).send({
        status: true,
        data: "Project created and published successfully"
    })


})

exports.getAllProject = catchAsync(async (req, res, next) => {

    const allBids = await Bid.find()

    if (!allBids) {
        return next(new appError("something went wrong ", 500))

    }

    res.status(200).send({
        status: true,
        data: allBids
    })


})

exports.getProjectById = catchAsync(async (req, res, next) => {
    if (!req.params.bid) {
        return next(new appError("please search relevent to project  ", 500))
    }
    const bid = await Bid.findById(req.params.bid)

    if (!bid) {
        return next(new appError("project not found or project no longer exists ", 500))

    }

    res.status(200).send({
        status: true,
        data: allBids
    })


})

exports.getProjectByIdAndUpdate = catchAsync(async (req, res, next) => {
    if (!req.params.bid) {
        return next(new appError("please search relevent to project  ", 500))
    }
    const bid = await Bid.findByIdAndUpdate(req.params.bid, { ...req.body }, {
        new: true,
        runValidators: true
    })

    if (!bid) {
        return next(new appError("project not found or project no longer exists ", 500))

    }

    res.status(200).send({
        status: true,
        data: bid
    })


})

exports.getProjectByIdAndHide = catchAsync(async (req, res, next) => {
    if (!req.params.bid) {
        return next(new appError("please search relevent to project  ", 500))
    }
    const bid = await Bid.findByIdAndUpdate(req.params.bid, { hidden: true }, {
        new: true,
        runValidators: true
    })

    if (!bid) {
        return next(new appError("project not found or project no longer exists ", 500))

    }

    res.status(200).send({
        status: true,
        data: bid
    })


})


exports.getProjectByIdAndUnhide = catchAsync(async (req, res, next) => {
    if (!req.params.bid) {
        return next(new appError("please search relevent to project  ", 500))
    }
    const bid = await Bid.findByIdAndUpdate(req.params.bid, { hidden: false }, {
        new: true,
        runValidators: true
    })

    if (!bid) {
        return next(new appError("project not found or project no longer exists ", 500))

    }

    res.status(200).send({
        status: true,
        data: bid
    })


})



















