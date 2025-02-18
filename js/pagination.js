document.addEventListener('DOMContentLoaded', () => {
  const judgeContainer = document.querySelector('.judge-container');
  const dots = document.querySelectorAll('.dot');
  const dotContainer = document.querySelector('.dot-container');
  const indicator = document.querySelector('.indicator');

  // Функція для оновлення індикатора
  function updateIndicator(activeGroup) {
    // Обираємо цільову крапку за індексом активної групи
    const targetDot = dots[activeGroup];
    const containerRect = dotContainer.getBoundingClientRect();
    const dotRect = targetDot.getBoundingClientRect();
    const leftPos = dotRect.left - containerRect.left;
    
    indicator.style.left = leftPos + 'px';
    
    // В залежності від активної групи налаштовуємо ширину індикатора:
    // Якщо група 0 – злиті дві ліві крапки (ширина 20px), інакше стандартна (10px)
    if (activeGroup === 0) {
      indicator.style.width = '20px';
    } else {
      indicator.style.width = '10px';
    }
  }

  // Функція для обчислення активного індексу картки (групи)
  function getActiveGroup() {
    const containerWidth = judgeContainer.offsetWidth;
    // Рахуємо приблизний індекс картки, що показана
    const cardIndex = Math.round(judgeContainer.scrollLeft / containerWidth);
    let activeGroup;
    // Налаштовуємо групування: перші 2 картки - група 0, наступні 2 - група 1, решта - група 2
    if (cardIndex < 2) {
      activeGroup = 0;
    } else if (cardIndex < 4) {
      activeGroup = 1;
    } else {
      activeGroup = 2;
    }
    return activeGroup;
  }

  // Початкове встановлення індикатора
  updateIndicator(getActiveGroup());

  // Слухаємо подію scroll на контейнері з картками
  judgeContainer.addEventListener('scroll', () => {
    const activeGroup = getActiveGroup();
    updateIndicator(activeGroup);
  });
});
