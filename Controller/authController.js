const jwt = require("jsonwebtoken");
const User = require("../Model/User");
const appError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Assign = require("../Model/Assigner");

const createTokenSendRes = (id, res, statusCode, message) => {


    let token = jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRIR_IN
    });
    console.log("token is ", token);
    let cookieOptions = {
        expires: new Date(
            Date.now() + 90 * 24 * 60 * 60 * 1000
        ),


        secure: true,
        httpOnly: true,
        sameSite: "None",
        path: "/",
    };
    if (process.env.NODE_ENV == 'production') {

        cookieOptions.secure = true
    }
    res.cookie('jwt', token, cookieOptions);
    // res.headers['access-control-allow-credentials'] = true

    // we will set cookies 
    res.status(statusCode).json({
        status: "success",
        user: message

    })
}


exports.signUp = catchAsync(async (req, res, next) => {
    if (req.baseUrl.includes('users')) {


        const { userName, email, password, phone, age, bio, } = req.body;
        const newUser = await User.create({ userName, email, password, phone, age, bio });

        console.log(newUser);
        newUser.password = undefined;
        createTokenSendRes(newUser._id, res, 201, newUser)
    } else {


        const { userName, email, password, phone, age, bio, } = req.body;
        const newUser = await Assign.create({ userName, email, password, phone, age, bio });

        console.log(newUser);
        newUser.password = undefined;
        createTokenSendRes(newUser._id, res, 201, newUser)
    }

});

exports.login = catchAsync(async (req, res, next) => {
    // console.log(req);
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new appError("please enter credential for get into in ", 400));
    }
    if (req.baseUrl.includes('users')) {





        const user = await User.findOne({ email }).select('+password')


        if (!user || !await user.correctPass(password, user.password)) {

            return next(new appError("please enter valid email id and password", 400));
        }
        user.password = undefined
        createTokenSendRes(user.id, res, 200, user)
    } else {




        const user = await Assign.findOne({ email }).select('+password')


        if (!user || !await user.correctPass(password, user.password)) {

            return next(new appError("please enter valid email id and password", 400));
        }
        user.password = undefined
        createTokenSendRes(user.id, res, 200, user)
    }



})



exports.logout = function (req, res) {
    console.log("came");
    res.cookie('jwt', 'logout', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    })

    res.status(200).json({ status: 'success' })
}