function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createEl.addEventListener('click', createBox);
destroyEl.addEventListener('click', destroyBox);

const getInpVal = Number(inputEl.value);

function createBox() {
  const newBoxes = [];
  const amount = getInpVal;
  for(let i=0; i<amount; i++) {
    const color = getRandomHexColor;
    const newBox = document.createElement('div');
    newBox.style.backgroundColor = color;
    newBox.style.width = 30 + 10*i;
    newBox.style.height = 30 + 10*i;
    newBox.style.display = 'flex';
    newBox.style.flexDirection = 'row';
    newBox.style.justifyContent = 'space-between';
    newBoxes.push(newBox);
  }
  boxesEl.append(...newBoxes);

}

function destroyBox() {

}