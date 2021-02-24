// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//     после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM
//         - узлов используй document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


// document.createElement()
// let NavList = document.getElementById("ingredients");


let navList = document.querySelector('#ingredients');

// console.log(navList);

const ingredientsList = ingredients.map(ing => {
  const navElements = document.createElement('li');
  navElements.textContent = ing;
  console.log(navElements);
  return navElements
}

);

navList.append(...ingredientsList);

console.log(navList);
