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

// exercise two selectors:
//
// var contents = $('#codeup').html();
// alert(contents);
//
// $('.codeup').css('border', '1px solid red').css('margin', '10px');
//
// $('li').css('font-size', '20px');
//
// $('h1, p, li').css('background-color','yellow');
//
//  $('h1').click(function () {
// alert('this is the h1 heading');
// });

// exercise three events:
$('h1').click(function () {
    alert('this is the h1 heading');
    $('h1').css('color', 'blue');
});

$('h2').click(function () {
    alert('this is the h2 heading');
    $('h2').css('color', 'red');
});

$('p').dblclick(function (e) {
    alert('paragraph was dbl-clicked')
    $('p').css('font-size', '18px').css('font-family', 'arial');
 });

$('li').hover(function () {
    $(this).css('color', 'red');
    },
    function () {
    $(this).css('color', 'black');
});

