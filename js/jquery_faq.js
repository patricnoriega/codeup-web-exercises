 $(document).ready(function () {
     $('#highlight-important').click(function (event) {
         event.preventDefault();
         $('dd').toggleClass('invisible');
     });

     $('dt').addClass('highlighted')
     $('#highlight-dt').click(function (event) {
         event.preventDefault();
         $('dt').toggleClass('highlighted');
     });

     $('#highlight-li').click(function (event) {
         event.preventDefault();
         $('li').last().css('background-color', 'yellow');
             })

        $('h3').click(function (event){
            event.preventDefault();
            $('#artist-albums').next().css('font-weight', 'bold');
        })
 })


 // $('li').last().css('background-color', 'yellow');
