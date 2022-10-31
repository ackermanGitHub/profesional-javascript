import AutoPause from "./plugins/AutoPause";
import AutoPlay from "./plugins/AutoPlay";

export default class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<AutoPlay | AutoPause>;

    constructor({video, plugins}) {
        this.media = video;
        this.plugins = plugins || [];
        this._initPlugins();
    } 
    _initPlugins = function () {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    togglePlay() {
        this.media.paused
            ? this.media.play()
            : this.media.pause();
    }
    toggleMute() {
        this.media.muted = !this.media.muted;
    }
}
