document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelector('.carosello-img');
    const images = document.querySelectorAll('.img-brand');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showImage(index) {
        if (index < 0) {
            currentIndex = images.length - 1;
        } else if (index >= images.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function() {
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener('click', function() {
        showImage(currentIndex + 1);
    });
});