const slides = document.querySelectorAll('.slide');
  const carruselInner = document.getElementById('carruselInner');
  const carrusel = document.getElementById('carrusel');
  let currentIndex = 0;
  let intervalId;

  function showSlide(index) {
    carruselInner.style.transform = `translateX(-${index * 100}%)`;
  }

  function startCarrusel() {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 3000);
  }

  function stopCarrusel() {
    clearInterval(intervalId);
  }

  // Iniciar carrusel al cargar
  startCarrusel();

  // Pausar al pasar el mouse
  carrusel.addEventListener('mouseenter', stopCarrusel);
  carrusel.addEventListener('mouseleave', startCarrusel);