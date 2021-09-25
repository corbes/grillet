var button= document.querySelector('.btn');
var buttons = document.querySelectorAll('.btn');
var grid= document.querySelector(".grid");

let i= 0;
do{ 
    i += 1;
    console.log(i);
buttons.forEach(function(button){
    button.onclick= function() {
       button.style.background= "black";
       if(button.style.background="black"){
           button.onclick=function(){
               button.style.background="white";
           }
       }
    buttons.addEventListener("click", button);
    }
})
} while (i < 100);


var btnFormat = document.querySelector(".format");
btnFormat.addEventListener("click", getClone);
    function getClone(){
        caseCopy= button.cloneNode(true);
        return grid.appendChild(caseCopy);
        }

            caseCopy.onclick= function() {
               caseCopy.style.background= "black";
               if(caseCopy.style.background="black"){
                   caseCopy.onclick=function(){
                       caseCopy.style.background="white";
                   }
               }
            caseCopy.addEventListener("click", caseCopy);
            }
