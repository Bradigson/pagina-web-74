let btn = document.querySelector("#boton")
let light = document.querySelector(".light")
let span = document.querySelector("span");
btn.onclick = function(){
    light.classList.toggle("on");
   span.textContent = "ON";
}
