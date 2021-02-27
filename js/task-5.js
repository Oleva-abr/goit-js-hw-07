// Напиши скрипт который, при наборе текста в инпуте input#name - input
//     (событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// nameInput.oninput = () => (nameInput.value === '') ?  nameOutput.innerHTML = 'незнакомец': nameOutput.innerHTML ;
    
nameInput.oninput = () => nameOutput.innerHTML =nameInput.value === '' ?   'незнакомец': nameInput.value ;
    
