"use strict";
class shinywords{
    static start(){
        document.getElementById("start").style.display = "none";
        document.getElementById("words").style.display = "block";
        document.getElementById("words").textContent = "start";
        $.getJSON("./resources/wores.json", function (data) {
            alert(data);
        });
        return;
    }
}
document.getElementById("start").addEventListener("click", shinywords.start, false);
