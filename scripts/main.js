var myButton = document.querySelector('Button');
var myHeading = document.querySelector('h1');

if (!localStorage.getItem('name')) {
    var username = getUserName();
    setUserName(username);
} else {
    var username = localStorage.getItem('name');
    setUserName(username);
}

myButton.onclick = function() {
    var username = getUserName();
    setUserName(username);
}

function getUserName() {
    var username = prompt('Please enter your name.');
    localStorage.setItem('name', username);
    return username;
}

function setUserName(username) {
    myHeading.textContent = "Mozilla is cool だよ," + username;
}