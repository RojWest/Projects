var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/beer.png') {
      myImage.setAttribute ('src','images/morda.png');
    } else {
      myImage.setAttribute ('src','images/beer.png');
    }
};
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
	var myName = prompt('Please enter your name.');
  	localStorage.setItem('name', myName);
  	myHeading.innerHTML  = 'Ну, здравствуй, коли не шутишь, ' + myName + '!!!';
	if(!localStorage.getItem('name')) {
  	setUserName();
  	}else {
 	var storedName = localStorage.getItem('name');
  	myHeading.innerHTML  = 'Ну, здравствуй, коли не шутишь, ' + storedName + '!!!';
	}
};
myButton.onclick = function() {
  setUserName();
};