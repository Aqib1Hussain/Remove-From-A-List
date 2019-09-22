const ul=document.querySelector("#list");
ul.addEventListener("click",function(e){
    ul.removeChild(e.target);
})