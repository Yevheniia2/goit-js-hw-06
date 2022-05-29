const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', function (elem) {
    const textLenght = elem.target.value.length;
    const length = inputEl.dataset.length;
    if (length == textLenght && length !=="") {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }
});