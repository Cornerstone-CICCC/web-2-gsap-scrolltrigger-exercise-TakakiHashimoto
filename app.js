gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
const sectionOne = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-one",
    pin: true,
    scrub: true,
    start: "top top",
    end: "bottom 20%",
  },
});

sectionOne
  .from(".line-one span", {
    y: "100vh",
    stagger: 0.3,
  })
  .to(".line-one", {
    backgroundColor: "yellow",
    duration: 2,
  })
  .from(".line-one .sun", {
    x: "100vh",
  })
  .to(".line-one", {
    backgroundColor: "white",
  })
  .to(
    ".line-one span",
    {
      x: "100vw",
    },
    "<"
  )
  .to(
    ".line-one .sun",
    {
      x: "-100vw",
    },
    "<"
  );

const sectionTwo = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-two",
    pin: true,
    scrub: true,
    start: "top top",
    end: "bottom 20%",
  },
});

sectionTwo
  .from(".line-two span:first-child", {
    opacity: 0,
    x: "-100vw",
    scale: 30,
  })
  .from(
    ".line-two span:last-child",
    {
      opacity: 0,
      x: "100vw",
      scale: 30,
    },
    "<"
  )
  .to(".line-two span:first-child", {
    y: "-20%",
  })
  .to(".line-two span:first-child", {
    y: "20%",
  })
  .to(
    ".line-two span:last-child",
    {
      y: "-20%",
    },
    "<"
  )
  .to(".line-two span:last-child", {
    y: "20%",
  });

const sectionThree = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three",
    pin: true,
    scrub: true,
    start: "top top",
    end: "bottom center",
    markers: true,
  },
});

sectionThree
  .from(".line-three span", {
    y: "100vh",
    stagger: 0.2,
  })
  .to(".line-three", {
    backgroundPositionX: "0%",
  })
  .to(
    ".line-three span",
    {
      color: "white",
    },
    "<"
  )
  .from(
    ".moon",
    {
      x: "100vw",
    },
    "<"
  );
