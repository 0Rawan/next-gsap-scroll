import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Hero from "./Hero";
import WorkingLibraries from "./WorkingLibraries";
import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";

gsap.registerPlugin(ScrollTrigger);

function Panels() {
  const app = useRef();
  const orangie = useRef();
  const bluie = useRef();
  const pinkie = useRef();

  useLayoutEffect(
    () => {
      // const ctx = gsap.context((self) => {
      //   const panels = self.selector(".animate-panel");
      //   gsap.set(panels, { yPercent: 100, opacity: 1 });
      //   const tl = gsap.timeline();
      //   panels.forEach((panel, i) => {
      //     tl.to(panel, {
      //       yPercent: 0,
      //       ease: "none"
      //     });
      //   });
      //   ScrollTrigger.create({
      //     animation: tl,
      //     trigger: app.current,
      //     start: "top top",
      //     end: () => "+=" + 100 * panels.length + "%",
      //     pin: true,

      //     scrub: 0.5,
      //     snap: {
      //       snapTo: 1 / panels.length,
      //       duration: 0.25,
      //       ease: "power2.out",
      //       delay: 0
      //     }
      //   });
      // }, app);
      // return () => ctx.revert();
      let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".education", { xPercent: -100})
        .from(".work", { xPercent: 100})
        .from(".skills", { yPercent: -100});
 

    ScrollTrigger.create({
      animation: tl,
      trigger: app.current,
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    })
}, app);
return () => ctx.revert();
},
    []
  );

  return (
    <div className="panels-container" ref={app}>
      <section className="panel first">
        <h1>Get to know me better</h1>
      <div class="mouse"></div>
<p class="text">Scroll</p>
      </section>
      {/* <section className="panel animate-panel red">ONE</section> */}
      <section className="panel animate-panel education"><Education/></section>
      <section className="panel animate-panel work"><Work/></section>
      <section className="panel animate-panel skills"><Skills/></section>
    </div>
  );
}

export default Panels;
