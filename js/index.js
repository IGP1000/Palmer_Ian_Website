gsap.registerPlugin(ScrollTrigger)

gsap.from('.scrll-trgg', {
    y: 400,
    opacity: 0,
    stagger: .15,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".text-align-center",
        ease: "sine.out",
        start: "top 80%",
        markers: true,
    },
});

gsap.from('.scrll-trgg-2', {
    y: 400,
    opacity: 0,
    stagger: .15,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".reserve-img-1",
        ease: "sine.out",
        start: "top 80%",
        markers: true,
    },
});

gsap.from('.scrll-trgg-3', {
    y: 400,
    opacity: 0,
    stagger: .15,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".ingredients",
        ease: "sine.out",
        start: "top 80%",
        markers: true,
    },
});