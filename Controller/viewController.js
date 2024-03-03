const { default: axios } = require("axios");
const Bid = require("../Model/Bid");
const RequestProject = require("../Model/RequestsProjects");
const Assign = require("../Model/Assigner");



exports.home = async (req, res) => {
    let project;
    try {

        project = await Bid.find().populate({ path: 'createrId' });

        res.status(200).render('landing', {
            title: 'Workup | Home',
            project
        })

    } catch (error) {
        console.log("error");
        res.status(200).render('landing', {
            title: 'Workup | Home',

        })
    }


}
exports.login = (req, res) => {




    res.status(200).render('login', {
        title: 'chandna'
    })
}
exports.assignSignup = (req, res) => {



    res.status(200).render('assignsignup', {
        title: 'Workup | Assign Signup 😊'
    })
}
exports.freeSignup = (req, res) => {



    res.status(200).render('freesignup', {
        title: 'WorkUp | Signup 😊'
    })
}
exports.createBidForm = (req, res) => {

    res.status(200).render('createProject', {
        title: 'Create Project | 🧑‍🏫'
    })
}
exports.Profile = async (req, res) => {
    if (req.user.role == 'assign') {
        const project = await Bid.find({ createrId: req.user.id })
        console.log(project);


        res.status(200).render('profile', {
            title: 'Profile  | ME  🧑‍🏫',
            project: project

        })
    } else {
        console.log(req.user);

        const project = await RequestProject.find({ userId: req.user.id }).populate({ path: "bidId" }).populate("assignId")
        console.log(project);
        res.status(200).render('profile', {
            title: 'Profile  | ME  🧑‍🏫',
            project: project

        })
    }







}

exports.requestProject = (req, res) => {

    res.status(200).render('requestProject', {
        title: 'Form  To Get Project |   🧑‍🏫'
    })
}
















