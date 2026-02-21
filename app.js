const scroll = new LocomotiveScroll({
    el: document.querySelector(`.main`),
    smooth: true
});

function imagecontainerAnimation() {
    var imagecontainer = document.querySelector(".image-container");
    var playbtn = document.querySelector("#play");
    imagecontainer.addEventListener("mouseenter", function () {
        //playbtn.style.opacity=1//
        //playbtn.style.scale=1//
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })
    })
    imagecontainer.addEventListener("mouseleave", function () {
        //playbtn.style.opacity=0//
        //playbtn.style.scale=0//
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    })
    imagecontainer.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x - 50,
            top: dets.y - 80
        })
    })
}

imagecontainerAnimation()

function loadinganimation() {
    gsap.from(".page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3

    })
    gsap.from(".page1 .image-container", {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.5,


    })
}
loadinganimation()

document.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
        left:dets.x,
        top: dets.y
    });
});

document.querySelectorAll(".child").forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(".cursor", {
                transform: "translate(-50% ,-50%) scale(1)"
            });
        });
        elem.addEventListener("mouseleave", function () {
            gsap.to(".cursor", {
                transform: "translate(-50% ,-50%) scale(0)"
            });
        });
    });
    /* var det1 = document.querySelector("#det1");
     var det2 = document.querySelector("#det2");
     var det3 = document.querySelector("#det3");
     var det4 = document.querySelector("#det4");

     det1.addEventListener("hover", function () {
  p.style.innerHTML=hello;
});*/
let det1 = document.getElementById("det1");

det1.addEventListener("mouseenter", function () {
    det1querySelector("dets1").innerHTML = "Premium Export Quality";
     det1.querySelector("strong").innerHTML = "Premium Export Quality";
});

det1.addEventListener("mouseleave", function () {
    det1.querySelector("strong").innerHTML = "Dehydrated Garlic";
});

let det2 = document.getElementById("det2");

det2.addEventListener("mouseenter", function () {
    det2.querySelector("strong").innerHTML = "Premium Export Quality";
});

det2.addEventListener("mouseleave", function () {
    det2.querySelector("strong").innerHTML = "Dehydrated White Onion";
});

let det3 = document.getElementById("det3");
det3.addEventListener("mouseenter", function () {
    det3.querySelector("strong").innerHTML = "Premium Export Quality";
});

det3.addEventListener("mouseleave", function () {
    det3.querySelector("strong").innerHTML = "Forest Masharoom";
});
let det4 = document.getElementById("det4");
det4.addEventListener("mouseenter", function () {
    det4.querySelector("strong").innerHTML = "Premium Export Quality";
});

det4.addEventListener("mouseleave", function () {
    det4.querySelector("strong").innerHTML = "Banana Chips";
});