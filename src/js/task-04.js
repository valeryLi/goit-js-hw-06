const decrementBtn = document.querySelector('button[data-action = decrement]')
const incrementBtn = document.querySelector('button[data-action = increment]')
const getValue = document.getElementById('value')
console.log(getValue)

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    getValue.textContent = counterValue -= 1;
});

incrementBtn.addEventListener('click', () => {
    getValue.textContent = counterValue += 1;
});

// decrementBtn.addEventListener('click', () => {
//     counterValue -= 1;
//     getValue.innerHTML = counterValue;
// });

// incrementBtn.addEventListener('click', () => {
//     counterValue += 1;
//     getValue.innerHTML = counterValue;
// });
