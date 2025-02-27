function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
var mainVdo = document.querySelector(".main-video")



document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x +20+"px"
    crsr.style.top = dets.y+20+"px"

})

mainVdo.addEventListener("mouseenter", function(){
        crsr.style.height= "20px"
        crsr.style.width= "90px"
        crsr.style.borderRadius= "50px"
        crsr.style.padding= "5px"
        crsr.style.paddingTop= "1px"
        crsr.innerHTML = "Choti Saee"
})
mainVdo.addEventListener("mouseleave", function(){
    crsr.style.height= "10px"
    crsr.style.width= "10px"
    crsr.style.borderRadius= "50%"
    crsr.innerHTML = `` 

})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top 27%",
        end:"top 0",
        scrub:3
    }
})

tl.to(".page1 h1",{
    x:-100,
},"anime")

tl.to(".page1 h2",{
    x:100,
},"anime")  

tl.to(".page1 img",{
    width:"90%"
},"anime")


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top -115%",
        end:"top -120%",
        scrub:3
    }
})

tl2.to(".main",{
    backgroundColor:"#fff"
    
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top -300%",
        end:"top -320%",
        scrub:3
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})


var boxes = document.querySelectorAll(".box");

boxes.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
       var attr = elem.getAttribute("data-image");
       console.log("Image Path:", attr);    
       if(attr){

       
       crsr.style.width = "450px"
       crsr.style.height = "400px"
       crsr.style.borderRadius = "0"
       crsr.style.backgroundImage = `url(${attr})`
       crsr.style.backgroundSize = "cover";
       crsr.style.backgroundPosition = "center";
       }
    })
    elem.addEventListener("mouseleave", function(){
        elem.style.backgroundColor = "transparent";
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })

})

// document.querySelectorAll(".box").forEach(box => {
//     let img = box.querySelector(".hover-img");

//     box.addEventListener("mouseenter", () => {
//         img.style.opacity = "1";
//         img.style.backgroundSize = "cover";
//                img.style.backgroundPosition = "center";
//                img.style.width = "200px"
//                       img.style.height = "200px"
//                       img.style.borderRadius = "0"
//     });

//     box.addEventListener("mouseleave", () => {
//         img.style.opacity = "0";
//         elem.style.backgroundColor = "transparent";
//     img.style.width = "20px"
//                 img.style.height = "20px"
//                 img.style.borderRadius = "50%"
//                 img.style.backgroundImage = `none`
//     });
// });

var h4 = document.querySelectorAll("#nav h4");
var purple = document.querySelector("#purple");

h4.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        purple.style.display = "block";
        gsap.to(purple, { opacity: 1, duration: 0.02 });
    });

    elem.addEventListener("mouseleave", function() {
        gsap.to(purple, {
            opacity: 0,
            duration: 0.02,
            onComplete: function() {
                purple.style.display = "none"; // Hide only after fade-out
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let container = document.querySelector(".scroll-text");
    let duplicate = container.cloneNode(true);
    document.querySelector(".text-container").appendChild(duplicate);

    gsap.to(".scroll-text", {
        xPercent: -50,
        duration: 10,
        ease: "linear",
        repeat: -1,
    });
});
// 

// Automatic carousel functionality
const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    const images = carousel.querySelector('.carousel-images');
    const totalImages = images.children.length;
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages; // Move to the next image
        const offset = -currentIndex * 100; // Calculate the offset
        images.style.transform = `translateX(${offset}%)`; // Move the images
    }, 3000); // Change image every 3 seconds
});

// const carousels2 = document.querySelectorAll('.carousel2');

// carousels2.forEach(carousel => {
//     const images = carousel.querySelector('.carousel-images2');
//     const totalImages = images.children.length;
//     let currentIndex = 0;

//     setInterval(() => {
//         currentIndex = (currentIndex + 1) % totalImages; // Move to the next image
//         const offset = -currentIndex * 100; // Calculate the offset
//         images.style.transform = `translateX(${offset}%)`; // Move the images
//     }, 3000); // Change image every 3 seconds
// });
// let currentIndex = 0;
// const images = document.querySelectorAll('.part2-img2');
// const totalImages = images.length;

// function showNextImage() {
//     currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
//     const offset = -currentIndex * 100; // Calculate the offset
//     document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
// }

// // Change image every 3 seconds
// setInterval(showNextImage, 3000);


