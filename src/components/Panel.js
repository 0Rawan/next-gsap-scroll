import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Hero from "./Hero";
import WorkingLibraries from "./WorkingLibraries";

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

      const tl = gsap.timeline();
      tl.from(orangie.current, { xPercent: -100 })
        .from(bluie.current, { xPercent: 100 })
        .from(pinkie.current, { yPercent: -100 });
   

    ScrollTrigger.create({
      animation: tl,
      trigger: app.current,
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    });
}, []);
  return (
    <div className="panels-container" ref={app}>
      <section className="panel">one</section>
      <section className="panel animate-panel orangie" ref={orangie}>TWO</section>
      <section className="panel animate-panel bluie" ref={bluie}>THREE</section>
      <section className="panel animate-panel pinkie" ref={pinkie}>FOUR</section>
    </div>
  );
}

export default Panels;
