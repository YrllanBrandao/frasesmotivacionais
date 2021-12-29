const getPhrase = document.querySelector("#getPhrase");

const inputPhrase = document.querySelector("#inputFrases");



 getPhrase.addEventListener('click', () => {
   
   
   const url = "https://api.adviceslip.com/advice";
   fetch(url)
     .then(response => response.json())
     .then((frase) => {
       
       inputPhrase.innerHTML = frase.slip.advice})
    /*   const f = frase.slip.advice;
      const urlTranslate = `https://api.mymemory.translated.net/get?q=${f}!&langpair=en|pt-br`;
       
       
       fetch(urlTranslate)
         .then(response => response.json())
         .then(traducao => inputPhrase.innerHTML = traducao.responseData.translatedText)
         
   
     
     } )
     .catch(error => console.log('erro'))
   
   */
   
 })
 
  

