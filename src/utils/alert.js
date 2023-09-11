import { writable } from "svelte/store";

export const alertMessage = writable('');
export const warningAlert = writable(false);
export const successAlert = writable(false);
let timeoutId;

function resetTimeout() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        const variable = [warningAlert, successAlert]
        variable.forEach((index) => index.set(false))
    },3000);
}

export function signUpAlert() {
    successAlert.set(true);
    alertMessage.set('Sign up successful');
    resetTimeout()
}

export function logInAlert() {
    warningAlert.set(true);
    alertMessage.set('Please log in before continue!');
    resetTimeout()
}

export function showLoginAlert() {
    warningAlert.set(true);
    alertMessage.set('Please check username/ password!')
    resetTimeout() 
}

export function showEditAlert() {
    warningAlert.set(true);
    alertMessage.set('Failed to edit job')
    resetTimeout() 
}

export function showJobAlert() {
    warningAlert.set(true);
    alertMessage.set('Failed to create job')
    resetTimeout() 
}

export function loginSuccessAlert() {
    successAlert.set(true);
    alertMessage.set('Login successfully, welcome!')
    resetTimeout() 
}

export function createJobAlert() {
    successAlert.set(true);
    alertMessage.set('Job created sucessfully !')
    resetTimeout() 
}

export function notRegisteredUserAlert() {
    warningAlert.set(true);
    alertMessage.set('You are not the Owner of this job post!')
    resetTimeout() 
}

export function alreadyLoginAlert() {
    warningAlert.set(true);
    alertMessage.set('You are already logged in to your account')
    resetTimeout() 
}