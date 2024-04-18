
// for support to old browsers 
import '@babel/polyfill';
import axios from 'axios';
import { alertt } from './alerts';

export const loginFormIn = async (data, id) => {
    try {
        let res;
        if (id == 'freelancer') {
            res = await axios.post("http://127.0.0.1:3004/api/v1/users/login", {
                ...data
            })
            console.log(res);
            if (res.data.status) {
                setTimeout(() => {
                    location.assign("/")
                }, [1000]);
                alertt("success", "logged in successfully ")
            }
        } else {
            res = await axios.post("http://127.0.0.1:3004/api/v1/assign/login", {
                ...data
            })
            if (res.data.status) {
                setTimeout(() => {
                    location.assign("/")
                }, [1000]);
                alertt("success", "logged in successfully ")
            }
        }

        console.log(res);
    } catch (error) {
        console.log(error);
        alertt("danger", error.response.data.massage)
    }





}



export const LogoutUser = async () => {
    try {
        const data = await axios.get("http://127.0.0.1:3004/api/v1/users/logout")
        if (data.data.status) {
            alertt("success", "you are succesfully logout !!!")
            setTimeout(() => {
                location.assign("/")
            }, [500])
        }
    } catch (error) {
        alertt("danger", "failed to logout !!!")
    }
}






export const sendProjectRequest = async (data) => {
    try {
        let localData = JSON.parse(localStorage.getItem("data"))
        console.log(localData);

        console.log("data iside is ", data);
        const res = await axios.post("http://127.0.0.1:3004/api/v1/users/createProjectRequest", { ...data, assignId: localData.assignid, bidId: localData.projectid })
        if (res.data.status) {
            alertt("success", "Request is submitted !")
            setTimeout(() => {
                location.assign("/")
            }, [500])
        }
    } catch (error) {
        alertt("danger", error?.response?.data?.massage || "Something Went wrong!!!")
    }
}






export const submitAssignForm = async (data, id) => {
    try {
        if (data.password !== data.cnfPassword) {
            return alertt("danger", "please enter password and confirm password correctly")
        }
        let res = await axios.post("http://127.0.0.1:3004/api/v1/assign/signup", {
            ...data
        })
        console.log(res);
        if (res.data.status) {
            alertt("success", "logged in successfully ")
            setTimeout(() => {
                location.assign("/")
            }, [500])
        }
    } catch (error) {
        alertt("danger", error.response.data.massage)
    }





}








export const createProject = async (data) => {
    try {

        let res = await axios.post("http://127.0.0.1:3004/api/v1/assign/createProject", {
            ...data
        })
        console.log(res);
        if (res.data.status) {
            alertt("success", "Project created successfully ")
            setTimeout(() => {
                location.assign("/")
            }, [500])
        }
    } catch (error) {
        alertt("danger", error.response.data.massage || "something went wrong")
    }





}







export const submitFreeForm = async (data) => {
    console.log("calledddddd****************");
    try {
        if (data.password !== data.cnfPassword) {
            return alertt("danger", "please enter password and confirm password correctly")
        }
        let res = await axios.post("http://127.0.0.1:3004/api/v1/users/signup", {
            ...data
        })
        console.log(res);
        if (res.data.status) {
            alertt("success", "You are logged in successfully ")
            setTimeout(() => {
                location.assign('/')
            }, [1000])
        }
    } catch (error) {
        // console.log(error);
        alertt("danger", error.response.data.massage || "something went wrong please try again to signup")
    }





}










