const inputs = document.querySelectorAll('input:not([type="password"])');
const password = document.querySelector('#password');
const password_confirm = document.querySelector('#confirm');

inputs.forEach(element => {
    element.addEventListener('change', (e) => {
        if (!e.target.validity.valid) {
            e.target.nextElementSibling.classList.remove('hide');
        } else {
            e.target.nextElementSibling.classList.add('hide');
        }
    })
})

password.addEventListener('change', checkPassword);
password_confirm.addEventListener('change', checkPassword);

function checkPassword(e) {
    if(password.value != password_confirm.value) {
        password.nextElementSibling.classList.remove('hide');
        password.classList.add('invalid');
        password_confirm.classList.add('invalid');
    } else {
        password.nextElementSibling.classList.add('hide');
        password.classList.remove('invalid');
        password_confirm.classList.remove('invalid');
    }
}