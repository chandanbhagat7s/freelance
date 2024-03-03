const RequestProject = require("../Model/RequestsProjects");
const appError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.requestForTheProject = catchAsync(async (req, res, next) => {

    const { freeDeadlin, freeDesc, freePrice, assignId, bidId } = req.body;
    console.log(freeDeadlin, freeDesc, freePrice, assignId, bidId, req.user._id);

    const createdRequestProject = await RequestProject.create({
        freeDeadlin, freeDesc, freePrice, userId: req.user._id, assignId, bidId

    })

    if (!createdRequestProject) {
        return next(new appError("Project Request not Submitted Please Try again", 500))
    }

    res.status(200).send({
        status: true,
        message: "Project Requested to Assigner Successfully"
    })


});




















