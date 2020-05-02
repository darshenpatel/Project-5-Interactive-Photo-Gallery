let input = document.getElementsByTagName('input');
let imageContainer = document.getElementsByTagName('a');
let captions = [];

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


$('input').focus(function () {
    $(this).removeAttr('placeholder'); 
}); 

$('input').blur(function () {
    $(this).attr('placeholder', 'Search');
}); 



$('input').keyup(function() {
    let search = $('input').val().toLowerCase(); 
    for (let i = 0; i < imageContainer.length; i++) {
        if (captions[i].indexOf(search) > -1) {
            $('imageContainer').eq(i).hide();
        }
        else {
            $('imageContainer').eq(i).show(); 
        }
    }
});

$('imageContainer').each(function(index){
    let dataCaption = $(this).getAttribute('title').toLowerCase();
    captions.push(dataCaption);
});
