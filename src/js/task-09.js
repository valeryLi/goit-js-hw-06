const body = document.body;
const changeColorBtn = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorBtn.addEventListener('click', () => {
  textEl.textContent = getRandomHexColor();
  body.style.backgroundColor = textEl.textContent;
});

