document.addEventListener("DOMContentLoaded", function () {
  const flipCards = document.querySelectorAll('.flip-card');

  // Обчислюємо значення rootMargin:
  // Коли верх картки потрапляє в область, що починається на 35% від верху viewport,
  // то це означає, що на відстані (vh - 0.35 * vh) = 0.65 * vh від верху екрана
  const vh = window.innerHeight;
  const rootMarginTop = `-${vh * 0.65}px`; // від'ємне значення
  const observerOptions = {
    root: null, // viewport
    rootMargin: `${rootMarginTop} 0px 0px 0px`, // верхня границя
    threshold: 0, // спрацьовує, коли хоч якийсь піксель потрапляє в область
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const innerCard = entry.target.querySelector('.flip-card-inner');
      if (entry.isIntersecting) {
        innerCard.classList.add("active");
      } else {
        innerCard.classList.remove("active");
      }
    });
  }, observerOptions);

  flipCards.forEach(card => observer.observe(card));
});
