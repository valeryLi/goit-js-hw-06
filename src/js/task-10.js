const inputEl = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

createBtn.addEventListener('click', createBoxes);

destroyBtn.addEventListener('click', destroyBoxes);

inputEl.addEventListener('click',)

function createBoxes(amout) {
  const newBox = document.createElement('div');
  newBox.classList.add('boxes-item');
  newBox.style.width = '30px';
  newBox.style.height = '30px';
  newBox.style.backgroundColor = getRandomHexColor();
  
  for (let i = 0; i < amout; i += 1){
    boxSize = newBox + i * 10;
  }
  boxesContainer.appendChild(newBox);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}