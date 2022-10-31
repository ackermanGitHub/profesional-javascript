import MediaPlayer from "../MediaPlayer";

export default class AutoPause {
    private threshold: number;
    private player: MediaPlayer;
    private visibilityState: Boolean;

    constructor() {
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player: MediaPlayer) {
        this.player = player;
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold,
        });
        observer.observe(this.player.media);
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
    }

    handleVisibilityChange() {
        const isVisible = document.visibilityState === "visible";
        if (isVisible && this.visibilityState) {
            this.player.media.play();
        } else {        
            this.player.media.pause();
        }
    }

    handlerIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0];

        const isVisible = this.visibilityState = entry.intersectionRatio >= this.threshold;
        
        //this.player.togglePlay();

        if (isVisible) {
            this.player.media.play();
        } else {
            this.player.media.pause();
        }

    }
}