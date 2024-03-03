const { default: axios } = require("axios");
const Bid = require("../Model/Bid");
<<<<<<< HEAD
const RequestProject = require("../Model/RequestsProjects");
const Assign = require("../Model/Assigner");
=======
>>>>>>> 99e263e19acbfb7ac0faf4a31d103a293a1d70d6



exports.home = async (req, res) => {
    let project;
    try {

<<<<<<< HEAD
        project = await Bid.find().populate({ path: 'createrId' });

=======
        project = await Bid.find();
        console.log("pproject is ", project);
>>>>>>> 99e263e19acbfb7ac0faf4a31d103a293a1d70d6
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
<<<<<<< HEAD
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
=======
exports.Profile = (req, res) => {

    res.status(200).render('profile', {
        title: 'Profile  | ME  🧑‍🏫'
>>>>>>> 99e263e19acbfb7ac0faf4a31d103a293a1d70d6
    })
}
















