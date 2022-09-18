function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesContainer = document.getElementById("boxes");

destroyBtn.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
  inputEl.value = "";
});

createBtn.addEventListener("click", () => {
  createBoxes(Number(inputEl.value));
});

function createBoxes(amount) {
  const box = "<div></div>";
  const boxes = Array(amount).fill(box).join("");
  boxesContainer.insertAdjacentHTML("afterbegin", boxes);
  const divs = [...boxesContainer.children];
  let size = 30;
  const step = 10;
  divs.map((div) => {
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = size + "px";
    div.style.height = size + "px";
    size += step;
  });
}
// ====================================================
// const newBox = document.createElement('div');
// newBox.classList.add('boxes-item');
// newBox.style.width = '30px';
// newBox.style.height = '30px';
// newBox.style.backgroundColor = getRandomHexColor();

//   for (let i = 0; i < amout; i += 1){
//     boxSize = newBox + i * 10;
//   }
//   boxesContainer.appendChild(newBox);
//=============================================================

// const refs = {
//   createBtn: document.querySelector("button[data-create]"),
//   destroyBtn: document.querySelector("button[data-destroy]"),
//   input: document.querySelector("input"),
//   boxesContainer: document.querySelector("#boxes"),
// };

// refs.input.addEventListener("input", onInputEvent);
// refs.createBtn.addEventListener("click", onCreateBtnClickEvent);
// refs.destroyBtn.addEventListener("click", onDestroyBtnClickEvent);

// let enteredNumber = 0;

// function onInputEvent(event) {
//   enteredNumber = event.target.value;
//   return enteredNumber;
// }

// function onCreateBtnClickEvent() {
//   destroyBoxes();
// }

// function onDestroyBtnClickEvent() {
//   destroyBoxes();
// }

// function createBoxes(amount) {
//   const markup = `<div class = box></div>`.repeat(amount);
//   refs.boxesContainer.insertAdjacentHTML("beforeend", markup);
//   const boxes = document.querySelectorAll(".box");

//   boxes.forEach((element, index) => {
//     element.style.width = `${30 + 10 * index}px`;
//     element.style.heigth = `${30 + 10 * index}px`;
//     element.style.backgroundColor = getRandomHexColor();
//   })
// }

// function destroyBoxes() {
//   refs.boxesContainer.innerHTML = "";
// }
