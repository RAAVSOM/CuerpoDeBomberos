document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const hiddenImages = gallery.querySelectorAll('img.hidden');

    loadMoreBtn.addEventListener('click', function() {
        hiddenImages.forEach(img => {
            img.classList.remove('hidden');
        });
        loadMoreBtn.style.display = 'none';
    });
});