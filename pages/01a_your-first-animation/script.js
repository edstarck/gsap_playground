gsap.to('.card', {
    opacity: 1,
    scale: 1,
    duration: 5,
    onComplete: () => {
        console.log('Animated completed');
        gsap.to('.card', {
            y: -21,
            duration: .5,
            repeat: -1, // бесконечное повторение
            yoyo: true
        })
    }
})