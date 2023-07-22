const form = document.querySelector(".submit-email");
const container = document.querySelector(".container");
const formContainer = document.querySelector(".form-container");
const inputEmail = document.querySelector(".email-address");
const modal = document.querySelector(".submit-alert");
const submitEmail = document.querySelector(".email-bold");

const submitBtn = document.querySelector(".submit-btn");
const dismissBtn = document.querySelector(".dismiss-btn");

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const init = () => {
  formContainer.classList.remove("form-error");
  container.classList.add("show");
  modal.classList.remove("show");
  form.addEventListener("submit", submitForm);
};

const submitForm = (e) => {
  e.preventDefault();
  const value = inputEmail.value;
  if (value.match(mailFormat)) {
    modal.classList.add("show");
    container.classList.remove("show");
    submitEmail.textContent = `${value}`;
    dismissBtn.addEventListener("click", () => {
      container.classList.add("show");
      modal.classList.remove("show");
      inputEmail.value = ``;
      formContainer.classList.remove("form-error");
    });
  } else {
    formContainer.classList.add("form-error");
  }
};
window.addEventListener("DOMContentLoaded", init);
