

let idList = document.getElementById("list");
let firstNumber = 2;
let secondNumber = 4;
let n = 0;
let idButton = document.getElementById("mybutton");

idButton.addEventListener("click", function() {

  while (n < 250) {
    n = firstNumber * secondNumber;
    let myP = document.createElement("p");
    myP.innerHTML = secondNumber;
    idList.appendChild(myP);
    secondNumber = n;
}

})

