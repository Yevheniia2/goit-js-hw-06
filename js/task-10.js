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

function getInpVal() {
  return inputEl.value;
}

function createBox() {
  const newBoxes = [];
  const amount = getInpVal();
  for(let i=0; i<amount; i+=1) {
    const color = getRandomHexColor();
    const newBox = document.createElement('div');
    newBox.classList.add('my__boxes__' + (i+1));
    newBox.style.backgroundColor = color;
    newBox.style.boxSizing = 'border-box';
    newBox.style.width = (30 + 10*i) + 'px';
    newBox.style.height = (30 + 10*i) + 'px';
    // newBoxes.style.display = 'flex';
    // newBoxes.style.flexDirection = 'row';
    // newBoxes.style.justifyContent = 'space-between';
    boxesEl.insertAdjacentHTML('beforeend', newBox);
    newBoxes.push(newBox);    
  }
  boxesEl.append(...newBoxes);
}

function destroyBox() { }