const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit',(e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const emailValue = email.value.trim();

    if(emailValue === '') {
        //mostrar error

        //añadir clase error
        setErrorFor(email, 'Email cannot be blank');

    } else {
        //añadir clases exito
        setSuccessFor(email);
    }
}

function setErrorFor(input, message) {
    const formValidation = input.parentElement; 
    const p = formValidation.querySelector('p');

    p.innerText = message;

    formValidation.className = 'form-validation error';
}

function setSuccessFor(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation success';

}