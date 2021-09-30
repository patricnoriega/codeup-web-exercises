 $(document).ready(function () {
        $('#highlight-important').click(function (event) {
            event.preventDefault();
            $('dd').toggleClass('invisible');
        });
        $('dt').addClass('highlighted')
        $('#highlight-dt').click(function (event) {
            event.preventDefault();
            $('dt').toggleClass('highlighted');
        })
    })

