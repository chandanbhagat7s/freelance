const { submitAssignForm, submitFreeForm, loginFormIn } = require("./functions")



const freelancerFormBtn = document.getElementById("freelancerFormBtn")
const projectAssignFormBtn = document.getElementById("projectAssignFormBtn")
const freeForm = document.getElementById("freeForm")
const assignForm = document.getElementById("assignForm")
const loginForm = document.getElementById("loginForm")


if (freeForm) {
    freeForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let obj = {};
        Array.from(e.target).map(el => {
            obj[el.id] = el.value
        })
        submitFreeForm(obj)
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















