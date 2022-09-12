const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

inputEl.addEventListener('input', () => {
    let val = inputEl.value;
    textEl.style.fontSize = val + 'px';
});