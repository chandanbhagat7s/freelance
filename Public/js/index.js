const { isObjectIdOrHexString } = require("mongoose")
const { logout } = require("../../Controller/authController")
const { submitAssignForm, submitFreeForm, loginFormIn, LogoutUser, createProject } = require("./functions")



const freelancerFormBtn = document.getElementById("freelancerFormBtn")
const projectAssignFormBtn = document.getElementById("projectAssignFormBtn")
const freeForm = document.getElementById("freeform")
const assignForm = document.getElementById("assignForm")
const loginForm = document.getElementById("loginForm")
const projectForm = document.getElementById("projectForm")
const logoutbtn = document.getElementById("logoutbtn")

if (logoutbtn) {
    logoutbtn.addEventListener("click", (e) => {
        LogoutUser()
    })
}

if (freeForm) {
    freeForm.addEventListener("submit", (e) => {
        console.log("came******************** insiden for requesting");
        e.preventDefault()
        // e.preventDefault()
        let obj = {};
        console.log(e);
        console.log(e.target);
        Array.from(e.target).map(el => {
            obj[el.id] = el.value
        })
        console.log(obj);

        submitFreeForm(obj)
    })
}
if (projectForm) {
    projectForm.addEventListener("submit", (e) => {
        e.preventDefault()
        // console.log(e);
        let obj = {};
        Array.from(e.target).map(el => {
            obj[el.id] = el.value
        })
        // console.log(obj);
        createProject(obj)


    })
}
if (assignForm) {
    assignForm.addEventListener("submit", (e) => {
        e.preventDefault()
        // console.log(e);
        let obj = {};
        Array.from(e.target).map(el => {
            obj[el.id] = el.value
        })
        console.log(obj);
        submitAssignForm(obj)
    })
}
if (loginForm) {
    console.log(loginForm);
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log(e);
        let obj = {};
        Array.from(e.target).map(el => {
            obj[el.id] = el.value
        })

        loginFormIn(obj, e.submitter.id)

    })
}















