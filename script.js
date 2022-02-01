"use-strict";

/* document.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-tipka="${e.keyCode}"]`);
    console.log(audio);
}); */

document.addEventListener("keydown", sviraj);

function sviraj (event) {
    const audio = document.querySelector(`audio[data-tipka="${event.keyCode}"]`);
    const tipka = document.querySelector(`div[data-tipka="${event.keyCode}"]`);
    if (!audio) return;


tipka.classList.add("active");
audio.currentTime = 0;
audio.play();
}