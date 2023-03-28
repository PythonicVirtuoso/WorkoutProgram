// Try to work from an empty slate at first, if you need it, look
// at github for inspiration.

const form = document.querySelector("form");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");

/* Maybe create an index for the different buttons. And if the buttons
qualify, accept it, if not, return false.
Also check if I need to disable both the click and the submit events. */

func = () => {
  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      console.log(e);
      const textField = form.textField.value;
      form.reset();
      first.innerHTML += `
        <li>${textField}</li>
        `;
      {
      }
    },
    { once: true }
  );
};

func1 = () => {
  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      console.log(e);
      const textField = form.textField.value;
      form.reset();
      second.innerHTML += `
        <li>${textField}</li>
        `;
    },
    { once: true }
  );
};

func2 = () => {
  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      console.log(e);
      const textField = form.textField.value;
      form.reset();
      third.innerHTML += `
        <li>${textField}</li>
        `;
    },
    { once: true }
  );
};

func3 = () => {
  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      console.log(e);
      const textField = form.textField.value;
      form.reset();
      fourth.innerHTML += `
        <li>${textField}</li>
        `;
    },
    { once: true }
  );
};
/*
buttons.forEach((button)) =>
  button.addEventListener("click", (e) => {
    whichButton = e.target.classList
    if (whichButton.contains("firstButton")){
        first.innerHTML += `
        <li>${textField}</li>
        `;
    } else if...

  },
  {once: true}
)
*/
