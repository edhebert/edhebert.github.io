/*

This code takes the content in the first <td> of each table row in my patents list (that contains a patent number), formats and adds commas to the patent number. It also dynamically creates a link to Google patents page corresponding to the patent by appending the patent number into the search URL

I found this code on jFiddle, which I located on a search for 'formatting numbers with commas in jquery'
http://jsfiddle.net/W5jwY/1/

I modified it to work for my needs, calling this fn and formatting first cell of each table row, by selecting it with 'td:first-child'
*/

/* Takes a number as argument and uses regular expressions to format and return that number with commas */      
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
}
      
$(document).ready(function(){ 
 
        
        /* Make URLs that link to the patent from each of the patent numbers, and display the number formatted with commas */

        $('#patent tbody td:first-child').each(function(){
            var noComma = $(this).html();
            var comma = numberWithCommas(noComma);
            $(this).html(comma);
            $(this).wrapInner('<a href="http://www.google.com/patents/US' + noComma + '">');
        });
        
 
        /* strip the "/" character from the URLs for patent applications */
        
        $('#apps tbody td:first-child').each(function(){
            var slash = $(this).html();
            var noSlash = $(this).html().replace('/','');
            $(this).wrapInner('<a href="http://www.google.com/patents/US' + noSlash + '">');
        });
              
    }         
); 