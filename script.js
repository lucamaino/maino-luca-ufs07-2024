const images = document.querySelectorAll('.udcmn img, .top img, .sinc-kent img, .tls img, .irmc img, .dttah img');

images.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.classList.add('zoom');
    });
    
    img.addEventListener('mouseout', () => {
        img.classList.remove('zoom');
    });
});