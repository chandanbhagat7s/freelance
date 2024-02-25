


exports.home = (req, res) => {
    // request the data using api from DB
    // console.log(tour);
    res.status(200).render('landing', {
        title: 'chandna'
    })
}
exports.login = (req, res) => {
    // request the data using api from DB

    // console.log(tour);



    res.status(200).render('login', {
        title: 'chandna'
    })
}
exports.assignSignup = (req, res) => {
    // request the data using api from DB

    // console.log(tour);



    res.status(200).render('assignsignup', {
        title: 'chandna'
    })
}
exports.freeSignup = (req, res) => {
    // request the data using api from DB

    // console.log(tour);



    res.status(200).render('freesignup', {
        title: 'chandna'
    })
}
















