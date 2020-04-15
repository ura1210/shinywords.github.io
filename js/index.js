"use strict";
class shinywords{
    counter = 0;
    static start(){
        document.getElementById("start").style.display = "none";
        document.getElementById("words").style.display = "block";
        document.getElementById("words").textContent = "startserif";
        $.getJSON("./resources/wores.json", function (data) {
            alert(data.mano);
        });
        return;
    }
    static answer(idol){
        counter++;
        
    }
    static correctness(){
        document.getElementById(`resultbox${counter}`).attributes.src = "";
    }

}

function getID(element) {
    const id = element.id;
    alert(id);
}

document.getElementById("start").addEventListener("click", shinywords.start, false);
document.getElementsByClassName("idolicon").addEventListener("click", shinywords.getID(this), false);
