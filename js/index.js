"use strict";
class shinywords{
    static counter = 1;
    static start(){
        document.getElementById("start").style.display = "none";
        $.getJSON("./resources/wores.json", function (data) {
            document.getElementById("words").textContent = data.mano[0];
            document.getElementById(`resultbox${shinywords.counter}`).setAttribute('src', './pic/marubatu/Heart.png');           
        });
        return;
    }
    static answer(idol){
        shinywords.counter++;
        
    }
    static correctness(){
    }
    static getID(idol) {
        console.log(idol);
    }
}

document.getElementById("start").addEventListener("click", shinywords.start, false);
document.getElementById("mano").addEventListener("click",function(){shinywords.getID(this)}, false);
