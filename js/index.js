"use strict";
// register modal component
Vue.component("modal", {
    template: "#modal-template"
});
var app = new Vue({
    el: '#app',
    data: {
        words: "表示されるセリフであてよう",
        counter: 1,
        isPrev: true,
        correctness: "",
        image_src: "./pic/marubatu/batu.png",
        showModal: false,
    },
    methods: {
        start: function (event) {
            app.isPrev = false;
            app.viewProblem();
        },
        answer: function (idol) {
            app.counter++;
            if (app.correctness === idol) {
                console.log("正解");
                document.getElementById(`resultbox${app.counter}`).style.display = "block";
                document.getElementById(`resultbox${app.counter}`).setAttribute('src', './pic/marubatu/Heart.png');
                app.viewProblem();
            } else {
                console.log("失敗");
                document.getElementById(`resultbox${this.counter}`).style.display = "block";
                document.getElementById(`resultbox${this.counter}`).setAttribute('src', './pic/marubatu/batu.png');
                app.viewProblem();
            }
        },
        viewProblem: function () {
            if(app.counter === 10) app.showResult();
            $.getJSON("./resources/wores.json", function (data) {
                let num = getRandomInt(23);
                num = 0;
                switch (num) {
                    case 0:
                        app.correctness = "mano";
                        app.words = data.mano[getRandomInt(data.mano.length)];
                    case 1:
                        app.correctness = "hiori";
                        app.words = data.hiori[getRandomInt(data.hiori.length)];
                    case 2:
                        app.correctness = "meguru";
                        app.words = data.meguru[getRandomInt(data.meguru.length)];
                    case 3:
                        app.correctness = "kogane";
                        app.words = data.kogane[getRandomInt(data.kogane.length)];
                    case 4:
                        app.correctness = "mamimi";
                        app.words = data.mamimi[getRandomInt(data.mamimi.length)];
                    case 5:
                        app.correctness = "sakuya";
                        app.words = data.sakuya[getRandomInt(data.sakuya.length)];
                    case 6:
                        app.correctness = "yuika";
                        app.words = data.yuika[getRandomInt(data.yuika.length)];
                    case 7:
                        app.correctness = "kiriko";
                        app.words = data.kiriko[getRandomInt(data.kiriko.length)];
                    case 8:
                        app.correctness = "amana";
                        app.words = data.amana[getRandomInt(data.amana.length)];
                    case 9:
                        app.correctness = "tenka";
                        app.words = data.tenka[getRandomInt(data.tenka.length)];
                    case 10:
                        app.correctness = "tiyuki";
                        app.words = data.tiyuki[getRandomInt(data.tiyuki.length)];
                    case 11:
                        app.correctness = "kaho";
                        app.words = data.kaho[getRandomInt(data.kaho.length)];
                    case 12:
                        app.correctness = "tiyoko";
                        app.words = data.tiyoko[getRandomInt(data.tiyoko.length)];
                    case 13:
                        app.correctness = "juri";
                        app.words = data.juri[getRandomInt(data.juri.length)];
                    case 14:
                        app.correctness = "rinze";
                        app.words = data.rinze[getRandomInt(data.rinze.length)];
                    case 15:
                        app.correctness = "natsuha";
                        app.words = data.natsuha[getRandomInt(data.natsuha.length)];
                    case 16:
                        app.correctness = "asahi";
                        app.words = data.asahi[getRandomInt(data.asahi.length)];
                    case 17:
                        app.correctness = "fuyuko";
                        app.words = data.fuyuko[getRandomInt(data.fuyuko.length)]; 
                    case 18:
                        app.correctness = "mei";
                        app.words = data.mei[getRandomInt(data.mei.length)];
                    case 19:
                        app.correctness = "tooru";
                        app.words = data.tooru[getRandomInt(data.tooru.length)];
                    case 20:
                        app.correctness = "madoka";
                        app.words = data.madoka[getRandomInt(data.madoka.length)];
                    case 21:
                        app.correctness = "koito";
                        app.words = data.koito[getRandomInt(data.koito.length)];
                    case 22:
                        app.correctness = "hinana";
                        app.words = data.hinana[getRandomInt(data.hinana.length)];
                }
            });
        },
        showResult: function () {
            app.showModal  = true;
        }

    }
})

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}