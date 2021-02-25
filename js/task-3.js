// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css - классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

let galleryList = document.querySelector('#gallery');
console.log(galleryList);


const imgList = images.map(el => { 
 
 const tagImg =  galleryList.insertAdjacentHTML('beforeEnd', `<li><img src="${el.url}" alt="${el.alt} " width= "270px" ;" height= "150px"></li>`); /* Сработало только так/*
  galleryList.setAttribute("style", "list-style:none;  display: flex;");

  // galleryList.lastElementChild.setAttribute("style", "width: 270px;  "); не работает, как ожидалось

  return tagImg;

});

// const img = document.querySelectorAll("img") тоже не работает
// img.style.width = "270px";
// img.setAttribute("style", "width: 270px;  ")
console.log(galleryList);