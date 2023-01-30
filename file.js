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
    btnPlus.style.backgroundColor = "white"; 
}
btnPlus.onfocus = () => {
    btnPlus.style.backgroundColor = " "; 
}

btnMinus.style.width = "100px";
btnMinus.style.height = "100px";
btnMinus.style.backgroundColor = "gray";
btnMinus.style.fontSize = "40px";
btnMinus.textContent = "-";
btnMinus.onfocus = () => {
    btnMinus.style.backgroundColor = "white"; 
}
btnMinus.onblur = () => {
    btnMinus.style.backgroundColor = " "; 
}

btnContainer.appendChild(btnPlus);
btnContainer.appendChild(btnMinus);

