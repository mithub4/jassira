function openLightbox(imgSrc) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightboxImg");
    lightbox.style.display = "block";
    lightboxImg.src = imgSrc;
  }
  
  function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
  }
  