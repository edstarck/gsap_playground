import gsap from "gsap";

gsap.to('.box', {
    opacity: 1,
    rotation: 360,
    background: "#ff6f61",
    borderRadius: "50%",
    scale: 1.25,
    duration: 2,
    // delay: 0.5,
    ease: 'bounce',
    // repeat: -1,
    // repeat: 2,
    // yoyo: true,
    // paused: true, анимация не запустится автоматически, нужно запустить вручную через .play()
    stagger: 1, // если анимируешь несколько элементов, каждый следующий начнёт анимироваться с задержкой в 1 секунду относительно предыдущего
    // repeatDelay: 2 // пауза в 2 секунды между повторениями анимации. Работает только вместе с repeat. Без repeat не имеет смысла.
})
