// querying the elements and classes I need in HTML
const buttons = document.querySelectorAll("button");
const form = document.querySelector("form");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const fifth = document.querySelector(".fifth");
const sixth = document.querySelector(".sixth");
const seventh = document.querySelector(".seventh");
const eight = document.querySelector(".eight");
const ninth = document.querySelector(".ninth");
const tenth = document.querySelector(".tenth");

const toggleButtons = (e) => {
  buttons.forEach((button) => button.classList.remove("btn"));
  e.target.classList.add("btn");
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const textField = form.textField.value;
  e.target.reset();

  const btn = document.querySelector("button.btn");
  if (!btn) {
    return;
  }
  const classList = btn.classList;

  if (classList.contains("firstButton") && textField.length) {
    first.innerHTML += `
  <li>${textField}</li>
  `;
  } else if (classList.contains("secondButton")) {
    second.innerHTML += `
  <li>${textField}</li>
  `;
  } else if (classList.contains("thirdButton")) {
    third.innerHTML += `
  <li>${textField}</li>
  `;
  } else if (classList.contains("fourthButton")) {
    fourth.innerHTML += `
  <li>${textField}</li>
  `;
  } else if (classList.contains("fifthButton")) {
    fifth.innerHTML += `
  <li>${textField}</li>
  `;
  } else if (classList.contains("sixthButton")) {
    sixth.innerHTML += `
  <li>${textField}</li>
  `;
  } else if (classList.contains("seventhButton")) {
    seventh.innerHTML += `
  <li>${textField}</li>
  `;
  } else if (classList.contains("eightButton")) {
    eight.innerHTML += `
  <li>${textField}</li>
  `;
  } else if (classList.contains("ninthButton")) {
    ninth.innerHTML += `
  <li>${textField}</li>
  `;
  } else if (classList.contains("tenthButton")) {
    tenth.innerHTML += `
  <li>${textField}</li>
  `;
  }
};

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    toggleButtons(e);
    window.removeEventListener(form, onFormSubmit);
    form.addEventListener("submit", onFormSubmit);
  })
);
