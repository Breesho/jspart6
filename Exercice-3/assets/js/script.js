let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

myButton.addEventListener("click", function () {

  languages.forEach(element =>  {
  
    let myP = document.createElement('p');
    myP.innerText = element ;
    myText.appendChild(myP);
  })
})