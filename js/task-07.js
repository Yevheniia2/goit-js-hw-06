const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

inputEl.addEventListener('input', changeFontSize);
function changeFontSize(event) {
    const fontSizing = event.currentTarget.value;
    textEl.style.fontSize = fontSizing + "px";
}
