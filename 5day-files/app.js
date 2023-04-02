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

// add an event listener for every click I make in the browser
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    whichButton = e.target.classList;
    addForm(whichButton);
    toggleButtons(e);
  })
);

// change the color of the buttons, according to which one you last
// pressed on
const toggleButtons = (e) => {
  buttons.forEach((button) => button.classList.remove("btn"));
  e.target.classList.add("btn");
};

// add eventlistener to the form which puts the text you write into
// it into the UL field under the button you pressed.
const addForm = (whichButton) => {
  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      textField = form.textField.value;
      form.reset();
      if (whichButton.contains("firstButton") && textField.length) {
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
