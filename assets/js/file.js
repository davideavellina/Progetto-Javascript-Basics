const counterDisplay = document.querySelector(".counterDisplay");
const btnContainer = document.querySelector(".buttons");
const btnPlus = document.createElement("button");
const btnMinus = document.createElement("button");

counter = 0;
counterDisplay.textContent = counter;

btnPlus.addEventListener ("click", ()=> {
    counter++;
    counterDisplay.textContent = counter;
} );
    
btnMinus.addEventListener ("click", ()=> {
    counter--;
    counterDisplay.textContent = counter;
} );
    


btnPlus.style.width = "100px";
btnPlus.style.height = "100px";
btnPlus.style.backgroundColor = "gray";
btnPlus.style.fontSize = "40px";
btnPlus.textContent = "+";
btnPlus.onfocus = () => {
    btnPlus.style.backgroundColor = "#C1C2A5"; 
}
btnPlus.onblur = () => {
    btnPlus.style.backgroundColor = "gray"; 
}

btnMinus.style.width = "100px";
btnMinus.style.height = "100px";
btnMinus.style.backgroundColor = "gray";
btnMinus.style.fontSize = "40px";
btnMinus.textContent = "-";
btnMinus.onfocus = () => {
    btnMinus.style.backgroundColor = "#C1C2A5"; 
}
btnMinus.onblur = () => {
    btnMinus.style.backgroundColor = "gray"; 
}

btnContainer.appendChild(btnPlus);
btnContainer.appendChild(btnMinus);

