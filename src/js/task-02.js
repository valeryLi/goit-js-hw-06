const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById('ingredients')
console.log(listEl)

const elements = ingredients.map(item => {
  const createItemEl = document.createElement('li');
  createItemEl.classList.add('item');
  createItemEl.textContent = item;
  
  return createItemEl;
});
console.log(elements)

listEl.append(...elements);
