"use strict";

document.getElementById("start").addEventListener("click", start, false);

$.getJSON("./resources/wores.json", function (data) {
    console.log(data);
});

const start = () => {
    alert("test");
    return;
}
