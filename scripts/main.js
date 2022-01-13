let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
}

document.querySelector('h1').onclick = function() {
    alert("Ouch! Stop poking me!");
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-logo.png') {
      myImage.setAttribute ('src','images/firefox-logo-horizontal-lockup.png');
      myImage.setAttribute ('height','200');
      myImage.setAttribute ('width','500');
    } else {
      myImage.setAttribute ('src','images/firefox-logo.png');
      myImage.setAttribute ('height','200');
      myImage.setAttribute ('width','200');
    }
}

let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}