
$(document).ready(function() {
    $('.invisible').click(function (event) {
        event.preventDefault();
        $('.invisible').addClass('visible');
    })
})
    $(document).ready(function () {
        $('#highlight-important').click(function (event) {
            event.preventDefault();
            $('.invisible').toggleClass('visible');
        });
    })

$(document).ready(function() {
    $('dt').click(function (event) {
        event.preventDefault();
        $('dt').addClass('highlighted');
    })
})

    $('#highlight-dt').click(function (event) {
        event.preventDefault();
        $('dt').toggleClass('highlighted');
    })

