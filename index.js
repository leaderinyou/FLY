var menu = document.getElementById("menu-bar")
     menu.addEventListener("click",function(){
         document.querySelector(".menu").classList.add("active");
     });

var close = document.getElementById("close")
     close.addEventListener("click",function(){
         document.querySelector(".menu").classList.remove("active");
     });