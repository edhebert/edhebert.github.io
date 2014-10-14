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
});