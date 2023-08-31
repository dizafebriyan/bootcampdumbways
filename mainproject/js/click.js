const overlay = document.getElementById('overlay');
const fullscreenImage = document.getElementById('fullscreen-image');

fullscreenImage.addEventListener('click', function() {
    overlay.classList.toggle('show');
});

const thumbnailImages = document.querySelectorAll('.thumbnail');
thumbnailImages.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        const imageUrl = thumbnail.getAttribute('data-image');
        fullscreenImage.setAttribute('src', imageUrl);
        overlay.classList.add('show');
    });
});
