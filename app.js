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
det1.addEventListener("mouseenter", function () {
    det1.querySelector("strong").innerHTML = "<h3 class='det-title-on-hover' >Dehydrated Garlic Cloves</h3>Savory garlic flavor in seconds. Pre-peeled and ready to crush, mince, or toss whole into sauces.";
    
});

det1.addEventListener("mouseleave", function () {
    det1.querySelector("strong").innerHTML = "Dehydrated Garlic";
});

let det2 = document.getElementById("det2");

det2.addEventListener("mouseenter", function () {
    det2.querySelector("strong").innerHTML = "<h3 class='det-title-on-hover' >Dehydrated Onion Shreds</h3>No tears, no hassle! Add sweet, classic onion flavor instantly to soups, curries, and more.";
});

det2.addEventListener("mouseleave", function () {
    det2.querySelector("strong").innerHTML = "Dehydrated White Onion";
});

let det3 = document.getElementById("det3");

det3.addEventListener("mouseenter", function () {
    det3.querySelector("strong").innerHTML = "<h3 class='det-title-on-hover' >Forest Mushroom Mix</h3>Bring gourmet, earthy flavors to your kitchen. Rehydrate quickly for hearty soups and risottos. Effortless flavor in every dish.";
});

det3.addEventListener("mouseleave", function () {
    det3.querySelector("strong").innerHTML = "Forest Masharoom";
});

let det4 = document.getElementById("det4");

det4.addEventListener("mouseenter", function () {
    det4.querySelector("strong").innerHTML = "<h3 class='det-title-on-hover' >Sweet & Spicy Plantain Chips</h3>Golden, crispy, and perfectly spiced. A sweet and spicy snack ready anytime great for lunchboxes or movie nights.";
});

det4.addEventListener("mouseleave", function () {
    det4.querySelector("strong").innerHTML = "Plantain Chips";
});


let det5 = document.getElementById("det5");

det5.addEventListener("mouseenter", function () {
    det5.querySelector("strong").innerHTML = "<h3 class='det-title-on-hover' >Premium Whole Spices</h3>Handpicked and carefully sourced for maximum freshness and aroma. Elevate every dish with bold, authentic flavors in their purest form.";
});

det5.addEventListener("mouseleave", function () {
    det5.querySelector("strong").innerHTML = "Premium Whole Spices";
});

let det6 = document.getElementById("det6");

det6.addEventListener("mouseenter", function () {
    det6.querySelector("strong").innerHTML = "<h3 class='det-title-on-hover' >Signature Masala Blend</h3>A perfectly balanced mix of hand-selected spices crafted for rich, unforgettable taste. Add depth, warmth, and authentic flavor to every meal with ease.";
});

det6.addEventListener("mouseleave", function () {
    det6.querySelector("strong").innerHTML = "Signature Masala Blend";
});

