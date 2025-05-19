let link = document.querySelector("a")

link.addEventListener("mouseover",mudaazul);
link.addEventListener("mouseout" ,mudapreto);

function mudaazul(){
    link.style.color="blue"
}
function mudapreto(){
    link.style.color="black"
}

const botao = document.querySelector("#botao");
let frase = document.querySelector("#frase");

botao.addEventListener("click",dispatchEvent);
function dispatchEvent(){
   frase.innerHTML="''O ser humano gosta de complicar as coisas, é só uma brisa, quem sabe ela bagunce teu cabelo, quem sabe te acaricie o rosto, quem sabe, quem sabe….'' - Dom Casmurro.";
}



