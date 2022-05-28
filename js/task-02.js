const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const containerEl=document.querySelector('#ingredients');
const elems=ingredients.map(option=>{
  const navItemEl=document.createElement('li');
  navItemEl.classList.add('item');
  navItemEl.textContent=option;
  return navItemEl;
});
containerEl.append(...elems);



