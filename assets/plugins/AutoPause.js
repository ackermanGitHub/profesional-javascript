export default class AutoPause {
    constructor() {
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
    }

    run(player) {
        this.player = player;

        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold,
        })
        observer.observe(this.player.media)
    }

    handlerIntersection(entries) {
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold;
        
        //this.player.togglePlay();

        if (isVisible) {
            this.player.media.play();
            console.log(isVisible, entry.IntersectionRatio, this.threshold);
        } else {
            this.player.media.pause();
            console.log(isVisible, entry.IntersectionRatio, this.threshold);
        }

    }
}