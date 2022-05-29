const counterValue={
    value:0,
    increment(){
        this.value+=1;
    },
    decrement(){
        this.value-=1;
    },
};

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');

incrementBtn.addEventListener('click',function(){
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});

decrementBtn.addEventListener('click',function(){
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});