const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


document.addEventListener("DOMContentLoaded", function () {
  var backToTopBtn = document.getElementById("backToTopBtn");
  scrollFunction();
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopBtn.classList.remove("visible");
    } else {
      backToTopBtn.classList.add("visible");
    }
  }

  backToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

//galeria
const container = document.querySelector('#bootstrap-image-gallery');
window.lightGallery(container, {
  selector: '.lg-item',
  plugins: [
    lgZoom,
    lgThumbnail
  ],
});


function AbrirChat() {
  const chat = document.getElementById("btns").style.display = "none";
  const bot = document.getElementById("chat").style.display = "block";
}