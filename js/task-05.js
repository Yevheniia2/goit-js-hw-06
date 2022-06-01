const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', function (event) {
    if (event.currentTarget.value == "") {
        textOutput.textContent = "Anonymous"
    } else {
        textOutput.textContent = this.value.trim()
    }
});
