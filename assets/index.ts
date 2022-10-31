import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Levenshtein from 'fast-levenshtein';

const video = document.querySelector('.movie');
const player = new MediaPlayer({
    video,
    plugins: [
        new AutoPlay(),
        new AutoPause()
    ]
});

const playButton: HTMLElement = document.querySelector('.play_btn')!;
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector('.mute_btn')!;
muteButton.onclick = () => player.toggleMute();

//const autoPause = new AutoPause();
//autoPause.run(player);

//
//if ('serviceWorker' in navigator) {
//    navigator.serviceWorker.register('/sw.js').catch(error => {
//        console.log(error.message);
//    })
//}

// text_input-container
const textInput: HTMLInputElement = document.querySelector('.text_input')!; 
const textInputBtn: HTMLButtonElement = document.querySelector('.text_input-btn')!; 
const textOutput: HTMLParagraphElement = document.querySelector('.text_input-output')!;

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

