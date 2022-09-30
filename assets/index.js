import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector('.movie');
const playButton = document.querySelector('.play_btn'); 
const muteButton = document.querySelector('.mute_btn');

const player = new MediaPlayer({
    video, 
    plugins: [
        new AutoPlay()
    ]
});
playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

// text_input-container
const textInput = document.querySelector('.text_input'); 
const textInputBtn = document.querySelector('.text_input-btn'); 
const textOutput = document.querySelector('.text_input-output');

const target = {
    red: 'Rojo',
    green: 'Verde',
    blue: 'Azul'
}
const handler = {
    get(obj, prop) {
        if (prop in obj) {
            return obj[prop];
        }
        const suggestion = Object.keys(obj).reduce((a, b ) => {
            return Levenshtein.get(a, prop) < Levenshtein.get(b, prop) ? a : b;
        });

        if (suggestion) {
            return suggestion;
        }

        return false;
    }
}

const proxy = new Proxy(target, handler);

textInputBtn.addEventListener('click', () => {
    const result = proxy[textInput.value];
    if (result) {
        textOutput.innerHTML = `no se encontró. Quisiste decir ${result}`;        
    } else {
        textOutput.innerHTML = `no se encontró`;  
    }
})