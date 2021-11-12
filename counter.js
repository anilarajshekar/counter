// set initial count

let count = 0;

//select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const result = e.currentTarget.classList;
        if (result.contains("decrease")){
            count--;
        }
        else if(result.contains("increase")){
            count++;
        }
        else {
            count = 0;
        }

        if (count < 0){
            
            value.style.color = "red";
        }
        else if (count > 0){
            value.style.color = "green"
        }
        else if (count === 0){
            value.style.color = "black"
        }

        value.textContent = count;


    });
});






/*
const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");

decrease.addEventListener('click', function(){

})*/