///////////// Lightbox Code //////////////
//  When a user clicks on a thumbnail image, display the lightbox container and insert an <img> tag, and allow user to clock off the lightbox
$(".thumb").on("click", function () {

    // display the lightbox container
    $("#lightbox-container").fadeIn(500);

    // insert an image tag
    $("#lightbox-content").html('<img src="' + $(this).attr("src") + '" class="img-fluid" />');

    // click off the lightbox
    $("#lightbox-container").on("click", function () {
        $(this).fadeOut(500);
    });

})