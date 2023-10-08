var typed = new Typed('#title-animation', {
    strings: ['Exoplanet Draco c'],
    loop: true,
    typeSpeed: 100,
});

$(function () {
    $('.container').starfield({
        starDensity: 1.0,
        mouseScale: 0.1,
        seedMovement: false
    });
});