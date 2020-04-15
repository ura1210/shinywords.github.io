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

}

function getID(element) {
    const id = element.id;
    console.log(id);
}

document.getElementById("start").addEventListener("click", shinywords.start, false);

const targets = document.getElementsByClassName('idolicon');
//document.getElementsByClassName("idolicon")[0].addEventListener("click", getID(this), false);
//for分で要素数分ループ処理
for(let i = 0; i < targets.length; i++){
    //クリックイベントでアラートを表示する
    targets[i].addEventListener('click', getID(this), false);
  }