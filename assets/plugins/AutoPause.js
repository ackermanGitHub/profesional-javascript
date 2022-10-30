export default class AutoPause {
    constructor() {
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player) {
        this.player = player;

        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold,
        });

        observer.observe(this.player.media);

        document.addEventListener('visibilitychange', this.handleVisibilityChange);
    }

    handleVisibilityChange() {
        const isVisible = document.visibilityState === "visible";
        if (isVisible) {
            console.log("visible");            
            this.player.media.play();
        } else {
            console.log("hidden");            
            this.player.media.pause();
        }
    }

    handlerIntersection(entries) {
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold;
        
        //this.player.togglePlay();

        if (isVisible) {
            this.player.media.play();
        } else {
            this.player.media.pause();
        }

    }
}