function playSound(event){

    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    //on évite les erreurs faites quand on appuie sur des touches qui ne sont pas reprises dans le code
    if (!sound) {
        return;
    }

    //on récupère la racine du projet/dossier, on crée une couleur random et on l'intègre au style dynamiquement
    const root = document.querySelector(":root");
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    root.style.setProperty("--color", `rgb(${red}, ${green}, ${blue})`);


    //la classe playing est un élément css pour animé les div
    key.classList.add("playing");
    //on reset les sons pour pouvoir les jouer instantanément sans attendre que l'audio se termine de lui même
    sound.currentTime = 0;
    sound.play();
}


// on enlève l'animation des touches lorsqu'elles ne sont plus appuyées.
function removeClass(event){
    event.target.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener("transitionend", removeClass);
});

window.addEventListener("keydown", playSound);