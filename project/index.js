const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach( (button) =>{
  console.log(button)
  button.addEventListener('click',function(e){
      console.log(e);
      console.log(e.target)// target karte hi hame pta chaljata h ki ye event aaa kha se raha h kyo ye ek html collection show karta h us me se hame iski id miljayegi or pta chal ajeyga ki ye kha se aarha h
      if(e.target.id ==='grey'){
        //body.style.backgroundColor = 'grey'// ye bhi likhste h ye hardcore value h or achhi programming ke liye ye likh skate h
        body.style.backgroundColor = e.target.id
      }
      else if(e.target.id === 'white'){
        body.style.backgroundColor = e.target.id
      }
      else if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id
      }      
      else if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id
      }      
  })
})