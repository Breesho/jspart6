

let idList = document.getElementById("list");
let firstNumber = 10;
let secondNumber = 2;
let n = 10 ;
let idButton = document.getElementById("mybutton");

idButton.addEventListener("click", function() {

  while (n > 1) {
    n = firstNumber / secondNumber;
    let myP = document.createElement("p");
    myP.innerHTML = firstNumber;
    idList.appendChild(myP);
    firstNumber= n;
}

})

