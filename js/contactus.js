const video = document.querySelector('video');
const contactForm = document.querySelector('#contactForm');


function playVideo () {
    video.play();
}

contactForm.addEventListener( 'submit',(e) => {
    e.preventDefault();
    playVideo ();
    alert('Mission completed successfully!');
});
