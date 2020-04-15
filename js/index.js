"use strict";
class shinywords{
    static counter = 1;
    correctness = "";
    static start(){
        const sw = new shinywords();
        sw.init();
        document.getElementById("start").style.display = "none";
        $.getJSON("./resources/wores.json", function (data) {
            console.log(data.words[0][0]);
            document.getElementById("words").textContent = data.words[0][0];
        });
        alert(data[0]);
    }
    answer(idol){
        this.counter++;
        if(correctness === idol ){
            document.getElementById(`resultbox${this.counter}`).setAttribute('src', './pic/marubatu/Heart.png');           
        }else{
            document.getElementById(`resultbox${this.counter}`).setAttribute('src', './pic/marubatu/batu.png'); 
        }
    }
    static correctness(){
    }
    init() {
        document.getElementById("mano").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("hiori").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("meguru").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("kogane").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("mamimi").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("sakuya").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("yuika").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("kiriko").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("amana").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("tenka").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("tiyuki").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("kaho").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("tiyoko").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("juri").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("rinze").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("natsuha").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("asahi").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("fuyuko").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("mei").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("tooru").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("madoka").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("koito").addEventListener("click",function(){this.answer(this)}, false);
        document.getElementById("hinana").addEventListener("click",function(){this.answer(this)}, false);
    }
}


document.getElementById("start").addEventListener("click", shinywords.start, false);