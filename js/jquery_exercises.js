console.log("hello")
"use strict";

// first jquery exercise:

// $(document).ready(function() {
// alert('the DOM has finished loading');
//
// });
//
// $('.highlight').css('background-color', 'yellow')
//
// $('.p').css('font-size', '14px')

// lecture selectors:

// id selector:
// $('#codeup').css('color', 'blue');

// class selector:
// $('.music-artist').css('background-color', 'orange').css('margin', '2px');

// element selector:
// $('p , .music-artist').css('font-size', '20px');

// all selector:
// $('*').css('border', '1px solid red').css('padding', '10px').css('margin', '10px')

// exercise two:

var contents = $('#codeup').html();
alert(contents);

$('.codeup').css('border', '1px solid red').css('margin', '10px');

$('li').css('font-size', '20px');

$('h1, p, li').css('background-color','yellow');

var h1Contents = $('h1').html();
alert(h1Contents);

