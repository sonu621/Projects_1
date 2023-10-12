const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstPgaeanimate(){
    var timeLine = gsap.timeline();

    timeLine.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 2,
        ease: Expo.easeInout
    })
    .to(".elem",{
        y: '0',
        ease: Expo.easeInout,
        duration: 1,
        delay:-1,
        stagger: .2
    })
    .from("#hero-footer",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease: Expo.easeInout
    })
}
function circleMouse(){
    window.addEventListener("mousemove", function (dets){
       document.querySelector("#cursore").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}
circleMouse();
firstPgaeanimate();

// document.querySelectorAll(".elemcontent").forEach(function(elemcontent){
//     elemcontent.addEventListener("mousemove", function(details){
//         gsap.to(elemcontent.querySelector("img"),{
//             opacity:1,
//             ease:Power1,
//         });
//     });
// });

document.querySelectorAll(".elemcontent").forEach(function(elemcontent){
    var rotate = 0;
    var diff = 0;

    elemcontent.addEventListener("mouseleave", function(dets){
       gsap.to(elemcontent.querySelector("img"),{
           opacity: 0,
           ease: Power3,
           duration: 0.5,
       });
    });

    elemcontent.addEventListener("mousemove", function(dets){
        var diff = dets.clientY - elemcontent.getBoundingClientRect();
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
       gsap.to(elemcontent.querySelector("img"),{
           opacity: 1,
           ease: Power3,
           top: diff,
           left: dets.clientX,
           rotate: gsap.utils.clamp(-20,20,diffrot * 0.2),
       });
    });
});
