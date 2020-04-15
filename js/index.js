"use strict";
class shinywords{
    counter = 0;
    static start(){
        document.getElementById("start").style.display = "none";
        $.getJSON("./resources/wores.json", function (data) {
            var arr = JSON.parse(data);
            alert(arr);
            document.getElementById("words").textContent = data.mano;
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
document.getElementsByClassName("idolicon").addEventListener("click", getID(this), false);
