"use strict";

document.getElementById("start").addEventListener("click", start, false);

const start = () => {
    alert("test");
    return;
}

$(function(){

    let reader;

    function onChange(event) {
        reader.readAsText(event.target.files[0]);
    }

    function onLoad(event) {
        console.log(JSON.parse(event.target.result));
    }

    reader = new FileReader();
    reader.onload = onLoad;

    $('input[type="file"]').on('change', onChange);
});