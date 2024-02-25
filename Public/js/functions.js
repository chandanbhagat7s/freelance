
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
            if (res.data.status == 'success') {
                alertt("success", "logged in successfully ")
            }
        } else {
            res = await axios.post("http://127.0.0.1:3004/api/v1/assign/login", {
                ...data
            })
            if (res.data.status == 'success') {
                alertt("success", "logged in successfully ")
            }
        }

        console.log(res);
    } catch (error) {
        console.log(error);
        alertt("danger", error.response.data.massage)
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
    } catch (error) {
        alertt("danger", error.response.data.massage)
    }





}


export const submitFreeForm = async (data) => {
    try {
        if (data.password !== data.cnfPassword) {
            return alertt("danger", "please enter password and confirm password correctly")
        }
        let res = await axios.post("http://127.0.0.1:3004/api/v1/users/signup", {
            ...data
        })
        console.log(res);
    } catch (error) {
        alertt("danger", "something went wrong please try again to signup")
    }





}










