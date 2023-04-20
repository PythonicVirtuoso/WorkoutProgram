import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzg3B_7K607AJds1K7amITVw2__2Zgbpo",
  authDomain: "workout-program-525fc.firebaseapp.com",
  projectId: "workout-program-525fc",
  storageBucket: "workout-program-525fc.appspot.com",
  messagingSenderId: "167565970291",
  appId: "1:167565970291:web:435620e3c6d01e495bd306",
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "Entries");

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

  console.log(index);

  addDoc(colRef, {
    entry: textField,
    index: index,
    created_at: serverTimestamp(),
  });

  /**/
};

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    toggleButtons(e);
    index = e.target.classList[0];
    window.removeEventListener(form, onFormSubmit);
    form.addEventListener("submit", onFormSubmit);
  })
);

let q = query(colRef, where("index", "==", index), orderBy("created_at"));

// real time collection data
onSnapshot(q, (snapshot) => {
  let entries = [];
  let entry1 = [];
  snapshot.docs.forEach((change) => {
    entry1.push({ ...change.data(), id: change.id });
    entries = entry1.map(formatData);
  });
  console.log(entries);
  updateUI(entries, index);
});

const formatData = (currentValue) => {
  const eachEntry = `<li>${currentValue.entry}</li>`;
  return eachEntry;
};

const updateUI = (entries, index) => {
  if (index === "firstButton") {
    first.innerHTML = entries;
  } else if (index === "secondButton") {
    second.innerHTML = entries;
  } /* else if (classList.contains("thirdButton")) {
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
  }*/
};
