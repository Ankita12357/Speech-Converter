let speech=new SpeechSynthesisUtterance();
let play=document.querySelector("button");

play.addEventListener("click",()=>{
            speech.text=document.querySelector("textarea").value;
            window.speechSynthesis.speak(speech);
  });