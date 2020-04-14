"use strict";

const start = () => {
    alert("test");
    return;
}

document.getElementById("start").addEventListener("click", start, false);

$.getJSON("./resources/wores.json", function (data) {
    console.log(data);
});

