jQuery(document).ready(function($) {
    $('a[data-rel^=lightcase]').lightcase({
    transition: 'elastic',
    showSequenceInfo: true,
    showTitle: true
    });
});

let searchInput = document.getElementById('search-gallery');

let imageContainer = document.getElementsByTagName('a');

let captions = [];

$('searchInput').keyup(function() {
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

$('.imageContainer').each(function(index){
    let dataCaption = $(this).children().attr('data-lc-caption').toLowerCase();
    captions.push(dataCaption);
});



