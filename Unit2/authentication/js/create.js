//my create.js file

const signupButton = document.getElementById('submit-sign-up');
const signupUsername = document.getElementById('sign-up-username');
const signupEmail = document.getElementById('sign-up-email');
const signupPassword = document.getElementById('sign-up-password');

//this function allows the user to sign up when they click the button
signupButton.onclick = function(){
    //take email and password and send to firebase
    const email = signupEmail.value;
    const password = signupPassword.value;
    firebase.auth().createUserWithEmailAndPassword(email, password);
};