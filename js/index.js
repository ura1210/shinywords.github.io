"use strict";
var app = new Vue({
    el: '#app',
    data: {
        words: "表示されるセリフであてよう",
        counter:1,
        correctness:"",
    },
    methods: {
        start: function (event) {
            const sw = new shinywords();
            const  test= sw.createQuiz();
            console.log(test);
            app.words = test;
        }
      }
  })


class shinywords {
    counter = 1;
    correctness = "";
    static start() {
        const sw = new shinywords();
        sw.init(sw);
        document.getElementById("start").style.display = "none";
        sw.createQuiz();

    }
    answer(idol) {
        console.log(idol.id);
        this.counter++;
        if (this.correctness === idol) {
            document.getElementById(`resultbox${this.counter}`).style.display = "block";
            document.getElementById(`resultbox${this.counter}`).setAttribute('src', './pic/marubatu/Heart.png');
        } else {
            document.getElementById(`resultbox${this.counter}`).style.display = "block";
            document.getElementById(`resultbox${this.counter}`).setAttribute('src', './pic/marubatu/batu.png');
        }
    }
    init(sw) {
        document.getElementById("mano").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("hiori").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("meguru").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("kogane").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("mamimi").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("sakuya").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("yuika").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("kiriko").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("amana").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("tenka").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("tiyuki").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("kaho").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("tiyoko").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("juri").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("rinze").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("natsuha").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("asahi").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("fuyuko").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("mei").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("tooru").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("madoka").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("koito").addEventListener("click", function () { sw.answer(this) }, false);
        document.getElementById("hinana").addEventListener("click", function () { sw.answer(this) }, false);
    }

    createQuiz() {
        $.getJSON("./resources/wores.json", function (data) {
            let num = getRandomInt(23);
            num = 0;
        switch (num) {
            case 0:

                return data.mano[getRandomInt(data.mano.length)];
            case 1:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 2:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 3:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 4:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 5:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 6:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 7:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 8:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 9:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 10:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 11:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 12:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 13:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 14:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 15:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 16:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 17:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 18:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 19:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 20:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 21:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
            case 22:
                document.getElementById("words").textContent = data.mano[getRandomInt(data.mano.length)];
        }
         });
    }
    showResult() {
        console.log("createQuiz");
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//document.getElementById("start").addEventListener("click", shinywords.start, false);