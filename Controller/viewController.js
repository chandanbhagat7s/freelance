const { default: axios } = require("axios");
const Bid = require("../Model/Bid");



exports.home = async (req, res) => {
    let project;
    try {

        project = await Bid.find();
        console.log("pproject is ", project);
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
exports.Profile = (req, res) => {

    res.status(200).render('profile', {
        title: 'Profile  | ME  🧑‍🏫'
    })
}
















