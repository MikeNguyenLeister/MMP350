const loginButton = document.getElementById('submit-login');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
loginButton.onclick = function() {
    const email = loginEmail.value;
    const password = loginPassword.value;
    //firebase.auth().signInWithEmailAndPassword(email,password);
    const promise = firebase.auth().signInWithEmailAndPassword(email,password);
    
    //error message
    promise.catch(function(error){
        console.log(error);
        alert(error.message);
  });           
};