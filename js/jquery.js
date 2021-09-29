"use strict";


var hackerCode = ""
$(document).keyup(function(event){
    console.log(event.keyCode);
    hackerCode += event.key;
    console.log(hackerCode);
    if (hackerCode === "codeup"){
        alert("you've been hacked! ")
        $('body').css("background-image", "url('img/matrix.rain copy.jpeg')")
    }
});

var konamiCode = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba"
var userKeys = ''
$(document).keyup(function(event){
    console.log(event.key);
    userKeys += event.key;
    console.log(konamiCode);

    if (userKeys == konamiCode){
        alert('easter egg found');
        $('body').css("background-image", "url('img/giphy.gif')")
    }
});