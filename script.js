const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementsByTagName("ul")[0];
const InfoBtn = document.getElementById("InfoBtn");

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add("active")
        InfoBtn.classList.add("active")
        bar.style.display ="none"
    } )
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove("active")
        InfoBtn.classList.remove("active")
        bar.style.display ="block"
    } )
}