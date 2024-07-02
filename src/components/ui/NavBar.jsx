import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });


  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "#DDDDD5" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

        toggleActions: "restart reverse restart reverse",
      });
    });

  });

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3"
    >
      {/* logo */}
      <a href="#hero" aria-label="Logo" className="z-50">
      <svg ref={logo} data-v-423bf9ae="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.76141780479864 60" class="font" width={100} height={35}><g data-v-423bf9ae="" id="a19cb51e-4310-49d2-8ba5-716f39bc7be9" fill="#000000" transform="matrix(6.091370322469708,0,0,6.091370322469708,-3.106595177827387,-21.076141548112524)"><path d="M6.10 6.53L5.91 7.45C5.40 6.78 4.62 6.36 3.60 6.36C1.88 6.36 0.51 7.69 0.51 9.84C0.51 12.00 1.88 13.31 3.60 13.31C4.61 13.31 5.38 12.89 5.89 12.22L6.10 13.15L7.26 13.15L7.26 6.53ZM3.94 12.12C2.74 12.12 1.95 11.14 1.95 9.84C1.95 8.55 2.74 7.55 3.94 7.55C5.18 7.55 5.98 8.55 5.98 9.84C5.98 11.14 5.18 12.12 3.94 12.12ZM16.32 6.36C15.15 6.36 14.57 6.80 14.15 7.41C13.72 6.66 12.99 6.36 12.24 6.36C11.48 6.36 10.79 6.72 10.41 7.38L10.25 6.53L9.01 6.53L9.01 13.15L10.43 13.15L10.43 9.26C10.51 8.15 11.04 7.57 11.89 7.57C12.79 7.57 13.15 8.31 13.15 9.39L13.15 13.15L14.57 13.15L14.57 9.60C14.57 8.30 15.09 7.57 16.01 7.57C16.93 7.57 17.30 8.31 17.30 9.38L17.30 13.15L18.71 13.15L18.71 9.28C18.71 7.12 17.57 6.36 16.32 6.36ZM21.23 5.26C21.74 5.26 22.15 4.86 22.15 4.36C22.15 3.86 21.74 3.46 21.23 3.46C20.74 3.46 20.33 3.86 20.33 4.36C20.33 4.86 20.74 5.26 21.23 5.26ZM20.56 13.15L21.95 13.15L21.95 6.53L20.56 6.53ZM27.02 6.53L25.61 6.53L25.61 4.64L24.21 4.64L24.21 6.53L23.33 6.53L23.33 7.67L24.21 7.67L24.21 13.15L25.62 13.15L25.61 7.67L27.02 7.67ZM28.28 13.29C28.79 13.29 29.20 12.88 29.20 12.38C29.20 11.89 28.79 11.48 28.28 11.48C27.78 11.48 27.37 11.89 27.37 12.38C27.37 12.88 27.78 13.29 28.28 13.29Z"></path></g></svg>
      </a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block">
          <span>about</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#services" className="group relative hidden md:inline-block">
          <span>services</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span>projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Let&apos;s Talk.</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
