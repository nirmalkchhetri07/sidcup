const { default: gsap } = require("gsap")

let main= document.querySelector("#main")
let cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        ease:"back.out"
    })
})

