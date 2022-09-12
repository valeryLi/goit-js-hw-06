const textInput = document.getElementById('validation-input')
console.log(textInput)

const inputLength = Number(textInput.getAttribute('data-length'))
console.log(typeof inputLength)

textInput.addEventListener('blur', (event) => {
    if (event.target.value.length === inputLength) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid')
    } else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    }
});