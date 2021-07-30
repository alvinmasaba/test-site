let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mj.jpeg') {
        myImage.setAttribute('src', 'images/juliet.jpeg');
    } else {
        myImage.setAttribute('src', 'images/mj.jpeg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'MJ and Juliet Binoche are cool, ' + myName;

}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'MJ and Juliet Binoche are cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}