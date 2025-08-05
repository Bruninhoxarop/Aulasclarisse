const elemSelect = document.querySelector("#selectModo");

elemSelect.addEventListener("change", function(){
 if(elemSelect.value == "light") {
    document.documentElement.setAttribute("modo-light", "light");
 }  else if (elemSelect.value == "dark") {
    document.documentElement.setAttribute("modo-dark", "dark");
 }  else {
    document.documentElement.removeAttribute("modo-light-dark");
 }
})