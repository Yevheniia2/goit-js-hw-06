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
    newBox.classList.add('my__boxes');
    newBox.style.backgroundColor = color;
    newBox.style.width = (30 + 10*i) + 'px';
    newBox.style.height = (30 + 10*i) + 'px';
    newBox.style.margin = 10 + 'px';
    boxesEl.insertAdjacentElement('beforeend', newBox);
    newBoxes.push(newBox);    
  }
  boxesEl.append(...newBoxes);
}

boxesEl.style.display = 'flex';
boxesEl.style.flexWrap = 'wrap';
boxesEl.style.flexDirection = 'row';
boxesEl.style.justifyContent = 'space-between';
const myBoxes = document.querySelector('.my__boxes');

function destroyBox() {
  let dlt = document.querySelectorAll('.my__boxes');
  for(let i = 0; i < dlt.length; i+=1){
    dlt[i].outerHTML = "";
  }
}