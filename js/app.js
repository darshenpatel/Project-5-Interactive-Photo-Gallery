jQuery(document).ready(function($) {
    $('a[data-rel^=lightcase]').lightcase({
    transition: 'elastic',
    showSequenceInfo: false,
    showTitle: true
    });
});

let searchInput = document.getElementById('search-gallery');

let imageContainer = document.getElementsByTagName('a');

let captions = [];

$('searchInput').keyup(function() {
    let search = $('searchInput').val().toLowerCase(); 
    for (let i = 0; i < imageContainer.length; i++) {
        if (captions[i].indexOf(search) < 1) {
            $('imageContainer').hide();
        }
        else {
            $('imageContainer').show(); 
        }
    }
});

$('.searchInput').each(function(index){
    let dataCaption = $(this).children().attr('data-lc-caption').toLowerCase();
    captions.push(dataCaption);
});



