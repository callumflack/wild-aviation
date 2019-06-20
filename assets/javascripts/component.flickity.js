
// flickity carousel config
// @external: flickity.pkgd.js
// @url: http://flickity.metafizzy.co
// @url: http://codepen.io/desandro/pen/dPdVNM
//
// For adding captions to a flickity instance:
// <div class="gallery">
//     {% assign slide_images = assets | where: "meta.slide", "true" %}
//     {% for images in slide_images %}
//         <div class="gallery-cell" data-caption="{{ forloop.index }} of {{ forloop.length }} | {{images.meta.caption}}">
//             <img src="{{images.url}}" >
//         </div>
//     {% endfor %}
// </div>
// <p class="gallery-caption u-marginTX2">&nbsp;</p>

// var $caption = $('.gallery-caption');
//
// // Flickity instance
// var flkty = $gallery.data('flickity');
// $gallery.on( 'cellSelect', function() {
// 	// set image caption using img's alt
// 	$caption.html( $( flkty.selectedElement ).data('caption') );
// });

$(document).ready( function() {
  $('.carousel').flickity({
    // groupCells: 2,
    // wrapAround: true,
    autoPlay: 3000,
    cellAlign: 'left',
    pauseAutoPlayOnHover: false,
    dragThreshold: 10,
    selectedAttraction: 0.1,
    friction: 0.7,
    arrowShape: {
      x0: 10,
      x1: 60, y1: 50,
      x2: 63, y2: 50,
      x3: 13
    },
    pageDots: true,
    prevNextButtons: false
    // all lazyloading handled by lazysizes
    // imagesLoaded: true,
    // lazyLoad: true,
    // bgLazyLoad: true
  });
});
