"use strict";

var app = new Vue({
    el: '#app',
    data: {
        words: "誰のセリフかな？",
        counter: 0,
        correctnessNum: 0,
        isPrev: true,
        isEnd: false,
        text:"10問正解を目指そう！",
        correctness: "",
        resultImg: ""
    },
    methods: {
        init: function (event) {
            app.isPrev = false;
            app.isEnd = false,
            app.counter = 0;
            app.correctnessNum = 0;
            for(let i = 1; i <= 10; i++){
                document.getElementById(`resultbox${i}`).style.display = "none";
            }
            
        },
        start: function (event) {
            app.init();
            app.viewProblem();
        },
        answer: function (idol) {
            if(app.isPrev) return;
            app.counter++;
            if (app.correctness === idol) {
                app.correctnessNum++;
                document.getElementById(`resultbox${app.counter}`).style.display = "block";
                document.getElementById(`resultbox${app.counter}`).setAttribute('src', './pic/marubatu/Heart.png');
                app.viewProblem();
            } else {
                document.getElementById(`resultbox${this.counter}`).style.display = "block";
                document.getElementById(`resultbox${this.counter}`).setAttribute('src', './pic/marubatu/batu.svg');
                app.viewProblem();
            }
        },
        viewProblem: function () {
            if(app.counter === 10) {
                app.showResult();
                return;
            }
            $.getJSON("./resources/Lines.json", function (data) {
                const num = getRandomInt(22);
                switch (num) {
                    case 0:
                        app.correctness = "mano";
                        app.words = data.mano[getRandomInt(data.mano.length)];
                        break;
                    case 1:
                        app.correctness = "hiori";
                        app.words = data.hiori[getRandomInt(data.hiori.length)];
                        break;
                    case 2:
                        app.correctness = "meguru";
                        app.words = data.meguru[getRandomInt(data.meguru.length)];
                        break;
                    case 3:
                        app.correctness = "kogane";
                        app.words = data.kogane[getRandomInt(data.kogane.length)];
                        break;
                    case 4:
                        app.correctness = "mamimi";
                        app.words = data.mamimi[getRandomInt(data.mamimi.length)];
                        break;
                    case 5:
                        app.correctness = "sakuya";
                        app.words = data.sakuya[getRandomInt(data.sakuya.length)];
                        break;
                    case 6:
                        app.correctness = "yuika";
                        app.words = data.yuika[getRandomInt(data.yuika.length)];
                        break;
                    case 7:
                        app.correctness = "kiriko";
                        app.words = data.kiriko[getRandomInt(data.kiriko.length)];
                        break;
                    case 8:
                        app.correctness = "amana";
                        app.words = data.amana[getRandomInt(data.amana.length)];
                        break;
                    case 9:
                        app.correctness = "tenka";
                        app.words = data.tenka[getRandomInt(data.tenka.length)];
                        break;
                    case 10:
                        app.correctness = "tiyuki";
                        app.words = data.tiyuki[getRandomInt(data.tiyuki.length)];
                        break;
                    case 11:
                        app.correctness = "kaho";
                        app.words = data.kaho[getRandomInt(data.kaho.length)];
                        break;
                    case 12:
                        app.correctness = "tiyoko";
                        app.words = data.tiyoko[getRandomInt(data.tiyoko.length)];
                        break;
                    case 13:
                        app.correctness = "juri";
                        app.words = data.juri[getRandomInt(data.juri.length)];
                        break;
                    case 14:
                        app.correctness = "rinze";
                        app.words = data.rinze[getRandomInt(data.rinze.length)];
                        break;
                    case 15:
                        app.correctness = "natsuha";
                        app.words = data.natsuha[getRandomInt(data.natsuha.length)];
                        break;
                    case 16:
                        app.correctness = "asahi";
                        app.words = data.asahi[getRandomInt(data.asahi.length)];
                        break;
                    case 17:
                        app.correctness = "fuyuko";
                        app.words = data.fuyuko[getRandomInt(data.fuyuko.length)];
                        break;
                    case 18:
                        app.correctness = "mei";
                        app.words = data.mei[getRandomInt(data.mei.length)];
                        break;
                    case 19:
                        app.correctness = "tooru";
                        app.words = data.tooru[getRandomInt(data.tooru.length)];
                        break;
                    case 20:
                        app.correctness = "madoka";
                        app.words = data.madoka[getRandomInt(data.madoka.length)];
                        break;
                    case 21:
                        app.correctness = "koito";
                        app.words = data.koito[getRandomInt(data.koito.length)];
                        break;
                    case 22:
                        app.correctness = "hinana";
                        app.words = data.hinana[getRandomInt(data.hinana.length)];
                        break;
                }
            });
        },
        showResult: function () {
            app.text = `10問中${app.correctnessNum}問正解`;
            app.words = `10問中${app.correctnessNum}問正解`;
            app.setResultImg();
            app.isEnd = true;
            app.isPrev = true;
            twttr.widgets.load();
        },
        setResultImg: function () {
            if(app.correctnessNum === 0){
                app.resultImg = "./pic/madoka/madoka0.png";
            }else if(app.correctnessNum <= 3){
                app.resultImg = "./pic/madoka/madoka1-3.png";
            }else if(app.correctnessNum <= 6){
                app.resultImg = "./pic/madoka/madoka4-6.png";
            }else if(app.correctnessNum <= 9){
                app.resultImg = "./pic/madoka/madoka7-9.png";
            }else if(app.correctnessNum === 10){
                app.resultImg = "./pic/madoka/madoka10.png";
            }
        }

    }
})

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}