const categEl = document.querySelectorAll('.item');
console.log("Number of categories:", categEl.length);

const itemEl = document.querySelectorAll('.item');

itemEl.forEach(function (value) {
    console.log(`Category: ${value.firstElementChild.textContent}`)
    console.log(`Elements: ${value.lastElementChild.children.length}`);
    });