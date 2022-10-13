let form = document.forms.loginForm;

document.querySelector('#checkFormButton').addEventListener('click' , () => {
    console.log('Ваш логин: ' + form.loginInput.value)
    console.log('Ваш пароль: ' + form.passwordInput.value)
})