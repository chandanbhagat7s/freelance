const { isObjectIdOrHexString } = require("mongoose")
const { logout } = require("../../Controller/authController")
const { submitAssignForm, submitFreeForm, loginFormIn, LogoutUser, createProject, sendProjectRequest } = require("./functions")
const { alertt } = require("./alerts")



const freelancerFormBtn = document.getElementById("freelancerFormBtn")
const projectAssignFormBtn = document.getElementById("projectAssignFormBtn")
const freeForm = document.getElementById("freeform")
const assignForm = document.getElementById("assignForm")
const requestProjectForm = document.getElementById("requestProjectForm")
const loginForm = document.getElementById("loginForm")
const projectForm = document.getElementById("projectForm")
const logoutbtn = document.getElementById("logoutbtn")
const projectBtn = document.getElementsByClassName("projectBtn")

if (logoutbtn) {
    logoutbtn.addEventListener("click", (e) => {
        LogoutUser()
    })
}


if (projectBtn) {
    Array.from(projectBtn).map(el => {
        el.addEventListener("click", (e) => {
            alertt("info", "Please Wait redirecting to Page")
            setTimeout(() => {
                localStorage.setItem("data", JSON.stringify(e.target.dataset))
                location.assign("/requestProject")

            }, [1000])
        })
    })

}


if (requestProjectForm) {
    console.log(requestProjectForm);
    requestProjectForm.addEventListener("submit", (e) => {
        e.preventDefault()
        // e.preventDefault() 
        let obj = {};
        console.log(e);
        console.log(e.target);
        Array.from(e.target).map(el => {
            obj[el.id] = el.value
        })
        console.log("object outsid is", obj);

        sendProjectRequest(obj)
    })
}







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















