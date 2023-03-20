const dayOneWorkout = document.querySelectorAll("form");
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

dayOneWorkout.forEach((form) =>
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const textField = form.textField.value;
    form.reset();

    if (e.target.classList.contains("firstForm")) {
      updateUI(textField, 0);
    } else if (e.target.classList.contains("secondForm")) {
      updateUI(textField, 1);
    } else if (e.target.classList.contains("thirdForm")) {
      updateUI(textField, 2);
    } else if (e.target.classList.contains("fourthForm")) {
      updateUI(textField, 3);
    } else if (e.target.classList.contains("fifthForm")) {
      updateUI(textField, 4);
    } else if (e.target.classList.contains("sixthForm")) {
      updateUI(textField, 5);
    } else if (e.target.classList.contains("seventhForm")) {
      updateUI(textField, 6);
    } else if (e.target.classList.contains("eightForm")) {
      updateUI(textField, 7);
    } else if (e.target.classList.contains("ninthForm")) {
      updateUI(textField, 8);
    } else if (e.target.classList.contains("tenthForm")) {
      updateUI(textField, 9);
    }
  })
);

const updateUI = (textField, number) => {
  console.log(textField, number);

  if (number === 0) {
    first.innerHTML += `
      <li>${textField}</li>
      `;
  } else if (number === 1) {
    second.innerHTML += `
    <li>${textField}</li>
    `;
  } else if (number === 2) {
    third.innerHTML += `
    <li>${textField}</li>
    `;
  } else if (number === 3) {
    fourth.innerHTML += `
    <li>${textField}</li>
    `;
  } else if (number === 4) {
    fifth.innerHTML += `
    <li>${textField}</li>
    `;
  } else if (number === 5) {
    sixth.innerHTML += `
    <li>${textField}</li>
    `;
  } else if (number === 6) {
    seventh.innerHTML += `
    <li>${textField}</li>
    `;
  } else if (number === 7) {
    eight.innerHTML += `
    <li>${textField}</li>
    `;
  } else if (number === 8) {
    ninth.innerHTML += `
    <li>${textField}</li>
    `;
  } else if (number === 9) {
    tenth.innerHTML += `
    <li>${textField}</li>
    `;
  }
};
