const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    !event.currentTarget.value 
     ?(refs.output.textContent = 'Anonymous')
    :(refs.output.textContent = event.currentTarget.value);
}

// function onInputChange(event) {
//     refs.output.textContent = event.currentTarget.value
//     console.log(event.currentTarget.value);
    
//      if (event.currentTarget.value === '') {
//         refs.output.textContent = 'Anonymous';
//     }
// }
