"use strict";

let candyButtons = document.querySelectorAll(".candyButton");
let total = 0;
candyButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
    let price = parseFloat(button.getAttribute("data-price"));
    total += price;
    console.log(total);
    });

});

// let candyTotal = document.querySelector(".pg1");



let moneyMaker = document.querySelector(".form");

moneyMaker.addEventListener("submit", (e)=>{
    e.preventDefault();
    let formData = new FormData(moneyMaker);
    let number = formData.get("number");
    let coin =formData.get("coin");
    for (let i =1; i <= number; i++){
        let newDiv = document.createElement("div");
        newDiv.innerText = `${coin}`;
        let coinContainer = document.querySelector(".circles");
        coinContainer.append(newDiv);
        newDiv.addEventListener("click", ()=>{
            newDiv.style.display + "none";
        });
    };
    moneyMaker.reset();
});

let lightbulb = document.querySelector(".light-bulb");

const lightact = ()=>{
    lightbulb.classList.add("lightact")
};
const darkact = ()=>{
    lightbulb.classList.darkact
};
const toggle = ()=>{
    lightbulb.classList.toggle
};
const endact = ()=>{
    lightbulb.classList.endact
};
let onButton = document.querySelector(".on")
onButton.addEventListener("click", lightact);

let offButton = document.querySelector(".off")
offButton.addEventListener("click", darkact);

let toggleButton = document.querySelector(".toggle")
toggleButton.addEventListener("click", toggle);

let endButton = document.querySelector(".end")
endButton.addEventListener("click", lightact);

// candyTotal.addEventListener()

// remove lightact not add
