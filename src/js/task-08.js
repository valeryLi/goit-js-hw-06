const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if (email && password !== '') {
        const formData = {
            email,
            password,
        };

        console.log(formData);
    } else {
        alert `Field cannot be empty!Please fill in all the fields!`;
    }
    event.currentTarget.reset();
}

// function onFormSubmit(event) {
//     event.preventDefault();
//     const {
//         elements: { email, password }
//     } = event.currentTarget;

//     if (email.value === '' || password.value === '') {
//         alert `Field cannot be empty!Please fill in all the fields!`;
//     }
//     console.log(`Email: ${email.value}, 
//     Password: ${password.value}`);
//     event.currentTarget.reset();
// }
