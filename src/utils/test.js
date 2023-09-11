import { writable } from 'svelte/store';

// why? UI component for events
// create 3 stores
export const alertMessage = writable('');
export const warningAlert = writable(false);
export const successAlert = writable(false);

// create timeout to hide alerts
let timeoutId;

function resetTimeout() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
    const variable = [warningAlert, successAlert]
    variable.forEach((index) => index.set(false));
    }, 5000);
}

// create all alert functions

export function signUpAlert(){
    successAlert.set(true);
    alertMessage.set('Sign up successful!')
    resetTimeout()
}
export function logInAlert() {
    warningAlert.set(true);
    alertMessage.set('Please log in first!');
    resetTimeout()
}

export function showLoginAlert() {
    warningAlert.set(true);
    alertMessage.set('Please check username / password !');
    resetTimeout()
}

export function showEditAlert() {
    warningAlert.set(true);
    alertMessage.set('Failed to edit job !');
    resetTimeout()
}

export function showJobAlert() {
    warningAlert.set(true);
    alertMessage.set('Failed to create job !');
    resetTimeout()
}


export function loginSucAlert() {
    successAlert.set(true);
    alertMessage.set('Successfully Logged In !');
    resetTimeout()
}

export function createJobAlert() {
    successAlert.set(true);
    alertMessage.set('Successfully Created Job !');
    resetTimeout()
}

export function notJobCreaterAlert(){
    warningAlert.set(true);
    alertMessage.set('You are not the one that created the job!')
    resetTimeout()
}

export function alreadyLogInAlert(){
    warningAlert.set(true);
    alertMessage.set('You are already logged in!')
    resetTimeout()
}