// Напиши скрипт, который бы при потере фокуса на инпуте,
//     проверял его содержимое на правильное количество символов.
//     Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

let inputVal = document.getElementById("validation-input");

let totalLenght = inputVal.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght);

inputVal.oninput = function() {
  if (inputVal.value.length === intTotallenght) {
    inputVal.classList.remove("invalid");
    inputVal.classList.add("valid");
  } else {
      inputVal.classList.remove("valid");
    inputVal.classList.add("invalid");
  }

  if (inputVal.value.length === 0) { //убрала  условие если не равно нулю, так как , тогда выполняються предыдущие условия
    inputVal.classList.remove("valid");
    inputVal.classList.remove("invalid");
    }
};
 

// && inputVal.value.length !== 0)
  //  if (inputVal.value.length !== 0 ) {
  //   inputVal.classList.add("invalid");
  //   inputVal.classList.remove("valid");
  // }

  //  if (inputVal.value.length !== intTotallenght ) {
  //   inputVal.classList.add("invalid");
  //   inputVal.classList.remove("valid");
  // }