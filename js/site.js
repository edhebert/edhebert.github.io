 $(document).ready(function() {

    // Handle Project Item hover and click behavior
    $('.article-item').hover(function(){
        // fade in the Project Info
        $(this).find('.article-info').fadeIn(400);
        // fade back the opacity of the image
        $(this).find('img').css('opacity', '0.1');
        // make the cursor a pointer
        $(this).css('cursor', 'pointer');
    },
    function() {
        $(this).find('.article-info').fadeOut(400);
        $(this).find('img').css('opacity', '1.0');
        $(this).css('cursor', 'auto');
    });

    $('.article-item').click(function() {
        // route all clicks to the box to the url
        var url = $(this).find('a').attr('href');
        window.location.href = url;
    });

    // check if message exists on focusout
    $('#message').focusout(function(){
        if ($('#message').val().length == 0) {
            // show error
            $('.msg-group .help-block').text('Please enter your message!');
            $('.msg-group').attr({
                class: 'form-group msg-group has-error'
            });
        }
        // clear error message
        else {
            $('.msg-group .help-block').text('');
            $('.msg-group').attr({
                class: 'form-group msg-group'
            });
        }

    });

    // check if message exists before submit
    $('#contactButton').click(function(e){
        // prevent default button behavior
        e.preventDefault();

        if ($('#message').val().length == 0) {
            $('.msg-group .help-block').text('Please enter your message!');
            $('.msg-group').attr({
                class: 'form-group msg-group has-error'
            });
        }
        else {
            // show the modal thank you message
            $('#myModal').modal();
        }

    });
});