const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


document.addEventListener("DOMContentLoaded", function() {
    var backToTopBtn = document.getElementById("backToTopBtn");

    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }

    backToTopBtn.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  });