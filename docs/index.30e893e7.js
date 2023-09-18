function delay(n) {
    n = n || 2000;
    return new Promise((done)=>{
        setTimeout(()=>{
            done();
        }, n);
    });
}
function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut"
    });
    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3
    });
    tl.set(".loading-screen", {
        left: "-100%"
    });
}
function contentAnimation() {
    gsap.from(".transition-this", {
        duration: 2,
        opacity: 0,
        delay: 1
    });
}
function slideRight() {
    gsap.from(".slide-right", {
        duration: 1,
        x: -30,
        opacity: 0,
        stagger: .5,
        delay: .05,
        ease: "power1"
    }, "<");
}
function slideUp() {
    gsap.from(".slide-up", {
        duration: 2,
        y: 25,
        opacity: 0,
        stagger: .3,
        ease: "back"
    });
}
$(function() {
    barba.init({
        sync: true,
        transitions: [
            {
                async leave (data) {
                    const done = this.async();
                    pageTransition();
                    await delay(1000);
                    done();
                },
                async enter (data) {
                    slideUp();
                    contentAnimation();
                },
                async once (data) {
                    slideUp();
                    slideRight();
                }
            }
        ]
    });
    barba.hooks.enter(()=>{
        window.scrollTo(0, 0);
    });
});

//# sourceMappingURL=index.30e893e7.js.map
