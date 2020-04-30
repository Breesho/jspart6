let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];


myButton.addEventListener("click", function () {

  days.forEach((element, index) =>  {
    let myP = document.createElement('p');
    myText.appendChild(myP);
    myP.innerText =  index + element ;

    if( element == 'Samedi' || element == 'Dimanche') {
   
     myP.style.fontWeight='bold';
      
      }
  })
  
})




// myButton.addEventListener("click", function () {

//   days.forEach((element, index) =>  {
//     let myP = document.createElement('p');
//     myText.appendChild(myP);
//     myP.innerText =  index + element ;

//     if( element > 4 ) {
   
//      myP.style.fontWeight='bold';
      
//       }
//   })
  
// })


// myButton.addEventListener("click", function () {

//   days.forEach((element, index) =>  {
//     let myP = document.createElement('p');
//     myText.appendChild(myP);
//     myP.innerText = element ;

//     if( element > 4 ) {
   
//      myP.style.fontWeight='bold';
      
//       }
//   })
  
// })