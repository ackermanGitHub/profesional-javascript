export default class AutoPlay {
    run(player) {
        player.toggleMute();
        player.togglePlay();
    }
}