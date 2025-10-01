let valobject = document.getElementsByClassName("object")[0];
let lastButton = document.getElementsByClassName("last_button")[0];

lastButton.addEventListener("click",()=>{
    valobject.classList.toggle("display_object")
})