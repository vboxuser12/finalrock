function computerpick(){
    let random=(Math.floor(Math.random()*3));
  if( random===0)
  {return ("rock")}
  else if( random===1)
  {return ("paper")}
  else { return ("scissor")};}
  
  
  
  let paper= document.querySelector("#paper");
  paper.addEventListener("click", winner);
  let scissor= document.querySelector("#scissor");
  scissor.addEventListener("click",winner);
  
  
  function humanpick()
  { let rock=document.querySelector("#rock");
    let paper=document.querySelector("#paper");
    let scissor=document.querySelector("#scissor");
    rock.addEventListener("click",()=> winner("rock"))
    paper.addEventListener("click",()=> winner("paper"))
    scissor.addEventListener("click", () => winner("scissor"))
  
  }
   humanpick()
  
   let humanscore=0;
   let computerscore=0;
  
  
  function winner( human) 
  {
  
  let computer=computerpick();
  
  if(computerscore===5|| humanscore===5)
  {h1.textContent=`FinalScore human: ${humanscore} computer: ${computerscore}`}
  
  else{
  
  
   if( computer===human)
    { division.textContent=`you picked ${human} and computer picked ${computer} no winner
   currentscore ${humanscore}- ${computerscore}`}
    else if ( human ==="rock" && computer==="scissor"|| human==="paper"&& computer==="rock")
      { humanscore+=1 ;division.textContent= `you picked ${human} and computer picked${computer} human won
    current score${humanscore}-${computerscore} `}
    
    else if ( computer ==="rock" && human==="scissor"|| computer==="paper"&& human==="rock")
    { computerscore+=1;  division.textContent= `you picked ${human} and computer picked${computer} computer won
    current score ${humanscore}-${computerscore}`}
    }
  
  }
    
  
  
  let division= document.createElement("div");
    let body= document.querySelector("body");
    body.appendChild(division);
  
    let h1=document.createElement("h1")
    body.appendChild(h1)
   
   
  