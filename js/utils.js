// toggle active buttons
$('.toggle-btn').on('click', function () {
    $(this).toggleClass("active");
    // return false;
});
// Scroll to top of page
function scrollToTop() {
    $('html, body').animate({scrollTop : 0},800);
}
/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}