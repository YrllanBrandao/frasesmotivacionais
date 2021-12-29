const getPhrase = document.querySelector("#getPhrase");

const inputPhrase = document.querySelector("#inputFrases");



 getPhrase.addEventListener('click', () => {
   
   
   const url = "https://api.adviceslip.com/advice";
   fetch(url)
     .then(response => response.json())
     .then((frase) => {
       
       inputPhrase.innerHTML = frase.slip.advice})
    
   
 })
 
  

