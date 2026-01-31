if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registriert'));
}

const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");

function updateIndicator(tab) {
  const rect = tab.getBoundingClientRect();
  const barRect = tab.parentElement.getBoundingClientRect();
  indicator.style.transform = `translateX(${rect.left - barRect.left + rect.width / 2 - 20}px)`;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab.active")?.classList.remove("active");
    tab.classList.add("active");
    updateIndicator(tab);
  });
});

// Initial
updateIndicator(document.querySelector(".tab.active"));
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab.active")?.classList.remove("active");
    tab.classList.add("active");

    document.querySelector(".page.active")?.classList.remove("active");
    document.getElementById(tab.dataset.page).classList.add("active");

    updateIndicator(tab);
  });
});
