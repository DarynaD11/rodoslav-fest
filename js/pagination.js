document.addEventListener("DOMContentLoaded", () => {
    const judgeContainer = document.querySelector(".judge-container");
    const dots = document.querySelectorAll(".dot");
    const dotContainer = document.querySelector(".dot-container");
    const indicator = document.querySelector(".indicator");

    // Функція для оновлення індикатора та активної точки
    function updateIndicator(activeGroup) {
        dots.forEach((dot) => {
            dot.style.backgroundColor = "gray"; // Скидаємо колір всіх точок
            dot.style.border = "2px solid gray"; // Скидаємо бордер
        });
        const targetDot = dots[activeGroup];
        targetDot.style.backgroundColor = "green"; // Робимо активну точку повністю зеленою
        targetDot.style.border = "2px solid green"; // Робимо бордер зеленим

        const containerRect = dotContainer.getBoundingClientRect();
        const dotRect = targetDot.getBoundingClientRect();
        const leftPos = dotRect.left - containerRect.left;

        indicator.style.left = leftPos + "px";
        indicator.style.width = "10px"; // Для всіх груп однакова ширина
    }

    // Функція для обчислення активного індексу картки
    function getActiveGroup() {
        const containerWidth = judgeContainer.offsetWidth;
        const cardIndex = Math.round(
            judgeContainer.scrollLeft / containerWidth
        );
        return Math.min(cardIndex, dots.length - 1); // Запобігання виходу за межі
    }

    // Початкове встановлення індикатора
    updateIndicator(getActiveGroup());

    // Слухаємо подію scroll на контейнері з картками
    judgeContainer.addEventListener("scroll", () => {
        const activeGroup = getActiveGroup();
        updateIndicator(activeGroup);
    });
});
