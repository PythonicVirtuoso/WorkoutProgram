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

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    whichButton = e.target.classList;
    addForm(whichButton);
  })
);

const addForm = (whichButton) => {
  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      textField = form.textField.value;
      form.reset();
      if (whichButton.contains("firstButton")) {
        first.innerHTML += `
      <li>${textField}</li>
      `;
      } else if (whichButton.contains("secondButton")) {
        second.innerHTML += `
      <li>${textField}</li>
      `;
      } else if (whichButton.contains("thirdButton")) {
        third.innerHTML += `
      <li>${textField}</li>
      `;
      } else if (whichButton.contains("fourthButton")) {
        fourth.innerHTML += `
      <li>${textField}</li>
      `;
      } else if (whichButton.contains("fifthButton")) {
        fifth.innerHTML += `
      <li>${textField}</li>
      `;
      } else if (whichButton.contains("sixthButton")) {
        sixth.innerHTML += `
      <li>${textField}</li>
      `;
      } else if (whichButton.contains("seventhButton")) {
        seventh.innerHTML += `
      <li>${textField}</li>
      `;
      } else if (whichButton.contains("eightButton")) {
        eigth.innerHTML += `
      <li>${textField}</li>
      `;
      } else if (whichButton.contains("ninthButton")) {
        ninth.innerHTML += `
      <li>${textField}</li>
      `;
      } else if (whichButton.contains("tenthButton")) {
        tenth.innerHTML += `
      <li>${textField}</li>
      `;
      }
    },
    { once: true }
  );
};
