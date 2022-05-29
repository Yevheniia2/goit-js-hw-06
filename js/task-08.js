const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const mail = event.currentTarget.elements.email.value;
    const pass = event.currentTarget.elements.password.value;

    if(mail === "" || pass === "") {
        return alert("Все поля должны быть заполнены");
    }
    console.log({mail, pass});
    form.reset();
}