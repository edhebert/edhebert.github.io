 $(document).ready(function() {

    // Style nav menu appropriately for active page

    // detect and split URL segments
    var url = document.URL;
    var urlSplit = url.replace('http://', '').split('/');
    var activeSegment = urlSplit[1].toLowerCase();
    console.log(activeSegment);
    var isSubPage = 0;

    // if we're at the home page, mark that li active
    if (activeSegment == '' || activeSegment == 'index.html') {
        $('.nav > li:first-child ').addClass('active');
        console.log('we at the hp!');
    }
    else {
        // compare each nav item against the current URL
        $('.nav > li > a').each(function() {
            // convert each navItem to lowercse, compare against URL
            var navItem = $(this).text().toLowerCase();
            // if the current link is the same as the current URL, add an 'active' class to the appropriate li
            if (navItem === activeSegment)
            {
                // add an active Class to the parent li element
                $(this).parent().addClass('active');
            }
        });        
    }





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