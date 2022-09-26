export default class MediaPlayer {
    constructor({video, plugins}) {
        this.media = video;
        this.plugins = plugins || [];
        this._initPlugins();
    } 
    _initPlugins = function () {
        const player = {
            play: () => this.togglePlay(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                if (value === true) {
                    this.media.muted = true;
                } else {
                    this.media.muted = false;
                }
            },
        }
        this.plugins.forEach(plugin => {
            plugin.run(player);
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
