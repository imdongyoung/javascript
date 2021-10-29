const modal = document.querySelector(".modal");
const openBtn = document.querySelector(".day");
const closeBtn = document.querySelector(".closeBtn");

const HIDDEN = "hiddenModal";

const hiddenModal = () => {
    modal.classList.toggle(HIDDEN);
}

openBtn.addEventListener("click", hiddenModal);
closeBtn.addEventListener("click", hiddenModal);