jQuery(document).ready(function($) {
    $('a[data-rel^=lightcase]').lightcase();
    $('a[data-rel="lightcase:myCollection:slideshow"]').lightcase({
        showSequenceInfo: false,
        showTitle: true, 
        transition: 'scrollHorizontal',
        timeout: 3000, 
        transitionOpen: 'elastic',
        transitionClose: 'elastic'
        
    });
});

// let input = document.getElementById('search-gallery');
// let imageContainer = document.getElementsByClassName('images');
let captions = [];
let resetSearch = document.getElementsByClassName('btn-reset');


$('input').focus(function () {
    $(this).removeAttr('placeholder'); 
}); 

$('input').blur(function () {
    $(this).attr('placeholder', 'Search');
}); 

$('button').mouseover(function () {
    $(this).css('color', '#000');
});

$('button').mouseout(function () {
    $(this).css('color', '#fff');
});

//With just .each(), the function selects a single parent element containing a single child. 
//So when you call .each() on it, then it doesn't loop over them because it is not a collection of elements.
$('.images').children().each(function (index) {
    //This selects the attribute needed from each element and stores them individually in dataCaption:
    let dataCaption = $(this).attr('data-lc-caption').toLowerCase();
    captions.push(dataCaption);
});

$('input').keyup(function() {
    let searchFor = $(this).val().toLowerCase(); 
    for (let i = 0; i < captions.length; i++) {
        if (captions[i].indexOf(searchFor) < 0) {
            //Having just imageContainer isn't the images nor is it the parent of the images.
            //It's a single element that contains another element which is the parent of those images. 
            //With a ('.images a') you target the parent element and children elements.
            $('.images a').eq(i).hide();
        }
        else {
            $('.images a').eq(i).show(); 
        }
    }
});


$('.btn-reset').click(function () {
    $('input').val('');
    $('.images').attr('a');  
}); 