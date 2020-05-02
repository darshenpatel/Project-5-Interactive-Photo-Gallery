let searchInput = document.getElementById('search-gallery');
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


$('searchInput').click(function () {
    $('placeholder').hide(); 
}); 

$('searchInput').keyup(function($) {
    let search = $('searchInput').val().toLowerCase(); 
    for (let i = 0; i < imageContainer.length; i++) {
        if (captions[i].indexOf(search) < 0) {
            $('imageContainer').eq(i).hide();
        }
        else {
            $('imageContainer').eq(i).show(); 
        }
    }
});

$('imageContainer').each(function(index){
    let dataCaption = $(this).children().attr('.images').toLowerCase();
    captions.push(dataCaption);
});
