import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector('.movie');
const playButton = document.querySelector('.play-btn'); 
const muteButton = document.querySelector('.mute-btn');

const player = new MediaPlayer({
    video, 
    plugins: [
        new AutoPlay()
    ]
});
playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

var distance = window.Levenshtein.get('back', 'book');
console.log(distance);