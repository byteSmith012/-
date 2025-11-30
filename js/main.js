if (window.innerWidth >= 778) {
  let lastScroll = 0;
  const header = document.querySelector(".header");
  const threshold = 5;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.classList.remove("hide");
      lastScroll = 0;
      return;
    }

    if (Math.abs(currentScroll - lastScroll) < threshold) return;

    if (currentScroll > lastScroll) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }

    lastScroll = currentScroll;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: false,
    closeButton: "top",
  });
});

// const slider = new Siema({
//   perPage: 1,
//   loop: true,
// });

// document.getElementById("prev").addEventListener("click", () => slider.prev());
// document.getElementById("next").addEventListener("click", () => slider.next());

const textSectionAccordionBtn = document.getElementById("text-section__accordion-btn");
const textSectionAccordionContent = document.getElementById("text-section__accordion-content");

textSectionAccordionBtn.addEventListener("click", () => {
  textSectionAccordionContent.classList.toggle("show");
  if (textSectionAccordionContent.classList.contains("show")) {
    textSectionAccordionBtn.textContent = "Hide";
  } else {
    textSectionAccordionBtn.textContent = "Show more";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const modals = document.querySelectorAll(".modal");

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-modal]");

    if (btn) {
      const modalId = btn.dataset.modal;
      const modal = document.getElementById(modalId);

      if (modal) {
        overlay.classList.add("active");
        modal.classList.add("active");
      }
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.closest(".close-btn")) {
      closeAllModals();
    }
  });

  overlay.addEventListener("click", closeAllModals);

  function closeAllModals() {
    overlay.classList.remove("active");
    modals.forEach((m) => m.classList.remove("active"));
  }
});

const burgerBtn = document.querySelector(".header__burger-btn");
const burgerCloseBtn = document.querySelector(".header__mobile-nav-close");
const mobileBurgerMenu = document.querySelector(".header__mobile-nav");
const mobileMenuItems = document.querySelectorAll(".header__mobile-nav-list-item");

mobileMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileBurgerMenu.classList.remove("active");
  });
});

burgerBtn.addEventListener("click", () => {
  mobileBurgerMenu.classList.add("active");
});

burgerCloseBtn.addEventListener("click", () => {
  mobileBurgerMenu.classList.remove("active");
});


const form = document.querySelector(".modal__form");
const nameInput = form.querySelector("input[name='name']");
const phoneInput = form.querySelector("input[name='telephone']");

// === МАСКА ТЕЛЕФОНУ ===
phoneInput.addEventListener("input", (e) => {
  let x = e.target.value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2]
    ? x[1]
    : `(${x[1]}) ${x[2]}` + (x[3] ? `-${x[3]}` : "");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let errors = 0;

  if (nameInput.value.trim().length < 2) {
    errors++;
    nameInput.classList.add("error");
  } else {
    nameInput.classList.remove("error");
  }

  const cleaned = phoneInput.value.replace(/\D/g, "");
  if (cleaned.length < 10) {
    errors++;
    phoneInput.classList.add("error");
  } else {
    phoneInput.classList.remove("error");
  }

  if (errors === 0) {
    form.submit();
  }
});
