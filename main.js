const signInButton = document.getElementById('signInButton');
const username = document.getElementById('name');
const password = document.getElementById('password');

const myusername = "moustafa";
const mypass = "1802";

signInButton.addEventListener('click', function(event) {
    if (username.value == myusername && password.value == mypass) {
        window.location.href = 'index1.html';
    } else {
        alert('Incorrect password!');
    }
});
