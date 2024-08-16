gsap.registerPlugin(ScrollTrigger);

const heroImg = document.querySelector('.hero-img-wrapper img');
const frameCount = 700;
const images = [];
let imagedata = {
    frame: 49
}


window.addEventListener('load', () => {
    for (let i = 49; i <= 700; i++) {
        const image = `./assets/img-sequence/FIN_375х667_${i.toString().padStart(4, '0')}.png`;
        images.push(image)
    }

    gsap.to(imagedata, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: true,
            end: "100%",
        },
        onUpdate: renderImage
    })

    function renderImage() {
        heroImg.setAttribute('src', images[imagedata.frame - 49])
    }

    // One
    const timeline1 = gsap.timeline({
        duration: 0.75,
        scrollTrigger: {
            trigger: '.section-one',
            start: "top 20%",
        }
    });

    timeline1.fromTo('.section-one h2 span', {
        y: 100
    }, {
        y: 0
    })
    timeline1.fromTo('.section-one .bottom-section .img-wrapper', {
        scaleX: 0
    }, {
        scaleX: 1
    }, '<')
    timeline1.fromTo('.section-one .bottom-section p', {
        opacity: 0
    }, {
        opacity: 1
    }, '<')


    // Two
    const timeline2 = gsap.timeline({
        duration: 0.75,
        scrollTrigger: {
            trigger: '.section-two',
            start: "top 60%",
        }
    })

    timeline2.fromTo('.section-two .wrapper', {
        opacity: 0
    }, {
        opacity: 1
    })

    timeline2.fromTo('.section-two .wrapper li h3', {
        y: -200,
        x: 100
    }, {
        y: 0,
        x: 0
    }, '<40%')

    timeline2.fromTo('.section-two .wrapper li p', {
        y: -200,
        x: 100
    }, {
        y: 0,
        x: 0
    }, '<')


    // Three
    const timeline3 = gsap.timeline({
        duration: 0.75,
        scrollTrigger: {
            trigger: '.section-three',
            start: "top 60%",
        }
    })

    timeline3.fromTo('.section-three .wrapper h3', {
        opacity: 0
    }, {
        opacity: 1
    })

    timeline3.fromTo('.section-three .wrapper .circles-wrapper .circle-one', {
        x: 150,
        opacity: 0
    }, {
        x: 20,
        opacity: 1
    }, '<50%')

    timeline3.fromTo('.section-three .wrapper .circles-wrapper .circle-two', {
        x: -150,
        opacity: 0
    }, {
        x: -20,
        opacity: 1
    }, '<')


    // Four
    const timeline4 = gsap.timeline({
        duration: 0.75,
        scrollTrigger: {
            trigger: '.section-four',
            start: "top 60%",
        }
    })

    timeline4.fromTo('.section-four .wrapper', {
        opacity: 0
    }, {
        opacity: 1
    })

    // Five
    const timeline5 = gsap.timeline({
        duration: 0.75,
        scrollTrigger: {
            trigger: '.section-five',
            start: "top 60%",
        }
    })

    timeline5.fromTo('.section-five .wrapper', {
        opacity: 0
    }, {
        opacity: 1
    })

    timeline5.fromTo('.section-five .wrapper li h3', {
        y: -200,
        x: 100
    }, {
        y: 0,
        x: 0
    }, '<40%')

    timeline5.fromTo('.section-five .wrapper li p', {
        y: -200,
        x: 100
    }, {
        y: 0,
        x: 0
    }, '<')

    timeline5.fromTo('.section-five .wrapper .circles-wrapper .circle', {
        opacity: 0
    }, {
        opacity: 1
    }, '<')

    timeline5.fromTo('.section-five .wrapper .circles-wrapper .circle-one', {
        x: 100
    }, {
        x: 20
    }, '<')
    timeline5.fromTo('.section-five .wrapper .circles-wrapper .circle-three', {
        x: -100
    }, {
        x: -20
    }, '<')


    // Six
    const timeline6 = gsap.timeline({
        duration: 0.75,
        scrollTrigger: {
            trigger: '.section-six',
            start: "top 60%",
        }
    })

    timeline6.fromTo('.section-six .wrapper', {
        opacity: 0
    }, {
        opacity: 1
    })


    // Hero Image
    const imageTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-one',
            start: "50% 95%",
            end: "50% 50%",
            scrub: true,
        }
    })

    imageTl.to('.hero-img-wrapper img', {
        opacity: 1,
        top: '30%'
    })

    const imageTl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-two',
            start: "50% 100%",
            end: "50% 50%",
            scrub: true,
        }
    })

    imageTl2.to('.section-one .wrapper', {
        opacity: 0
    }, '<')

    imageTl2.to('.hero-img-wrapper img', {
        top: '170%'
    }, '<')

    const imageTl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-three',
            start: "50% 95%",
            end: "50% 50%",
            scrub: true,
        }
    })

    imageTl3.to('.hero-img-wrapper img', {
        top: '210%',
        right: '-2%'
    })

    const imageTl4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-four',
            start: "50% 95%",
            end: "50% 50%",
            scrub: true,
        }
    })

    imageTl4.to('.hero-img-wrapper img', {
        top: '400%',
        right: '20%'
    })

    const imageTl5 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-five',
            start: "50% 95%",
            end: "50% 50%",
            scrub: true,
        }
    })

    imageTl5.to('.hero-img-wrapper img', {
        top: '430%',
        right: '-5%'
    })

    const imageTl6 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-six',
            start: "50% 95%",
            end: "50% 70%",
            scrub: true,
        }
    })

    imageTl6.to('.hero-img-wrapper img', {
        top: '570%',
        right: '20%'
    })

})  