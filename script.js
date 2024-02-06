var tl = gsap.timeline()

tl.from("#nav, #nav1 h3,i, #nav2 h1, #nav3 button",{
    y:-40,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.3,
    
  
})

tl.from("#main h1",{
    y:40,
    opacity:0,
    duration:1,
    scale:0.2,
    stagger:0.3,

})

tl.from("video",{
    y:800,
    opacity:0,
    duration:1,
    stagger:0.3,
    rotate:360,
   
   

})


tl.from("#img1",{
    y:800,
    opacity:0,
    duration:1,
    stagger:0.3,
    rotate:360

})


tl.from("#img2",{
    x:800,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3,
    rotate:360

})



tl.from("#img3",{
    y:-800,
    opacity:0,
    duration:1,
    stagger:0.3,
    rotate:360

})



tl.from("#img4",{
    x:-800,
    opacity:0,
    duration:1,
    stagger:0.3,
    rotate:360

})



tl.from("#img5",{
    y:800,
    opacity:0,
    duration:1,
    stagger:0.3,
    rotate:360

})

//------------------------------------------------//


tl.to("video",{
    y:-800,
    opacity:0,
    duration:1,
    stagger:0.3,
    rotate:360,
   

})

tl.to("#img1",{
    y:-800,
    opacity:0,
    duration:1,
    stagger:0.3,
    rotate:360

})


tl.to("#img2",{
    y:-800,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3,
    rotate:360

})



tl.to("#img3",{
    y:-800,
    opacity:0,
    duration:1,
    stagger:0.3,
    rotate:360

})



tl.to("#img4",{
    y:-800,
    opacity:0,
    duration:1,
    stagger:0.3,
    rotate:360

})



tl.to("#img5",{
    y:-800,
    opacity:0,
    duration:1,
    stagger:0.3,
    rotate:360

})
//---------------------------------------------//


gsap.from("#page2 #box",{
    scale:0,
    duration:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:2

    }
    
})

gsap.from("#page2 h3",{
    y:-60,
    opacity:0,
    duration:1,
    delay:1

})

gsap.from("#page3 #box",{
    scale:0,
     duration:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        start:"top 60%",
        end:"top 60%",
        scrub:4
    }
    
})






