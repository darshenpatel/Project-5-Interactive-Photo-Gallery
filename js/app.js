jQuery(document).ready(function($) {
    $('a[data-rel^=lightcase]').lightcase();
    $('a[data-rel="lightcase:myCollection:slideshow"]').lightcase({
        showSequenceInfo: false,
        showTitle: true, 
        transition: 'scrollHorizontal',
        transitionOpen: 'elastic',
        transitionClose: 'elastic'
    });
});

// let input = $(document.getElementsByTagName('input'));
// let imageContainer = $(document.querySelectorAll('a'));
let captions = [];


$('input').focus(function () {
    $(this).removeAttr('placeholder'); 
}); 

$('input').blur(function () {
    $(this).attr('placeholder', 'Search');
}); 

$('.imageContainer').each(function () {
    let dataCaption = $(this).attr('a').toLowerCase();
    captions.push(dataCaption);
});

$('input').keyup(function() {
    let searchFor = $(this).val().toLowerCase(); 
    for (let i = 0; i < captions.length; i++) {
        if (captions[i].indexOf(searchFor) < 0) {
            $('.imageContainer').eq(i).hide();
        }
        else {
            $('.imageContainer').eq(i).show(); 
        }
    }
});




