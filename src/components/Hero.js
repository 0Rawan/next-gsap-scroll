import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
function Hero() {
  useGSAP(() => {
    gsap.from(".loader-top, .loader-bottom", 2, {
      delay: 1,
      height: "50vh",
      ease: "power4.inOut",
    });

    gsap.to(".marque", 3.5, {
      delay: 0.75,
      top: "50%",
      ease: "power4.inOut",
    });

    gsap.from(".loader-top .marque, .loader-bottom .marque", 5, {
      delay: 1,
      left: "100%",
      ease: "power3.inOut",
    });

    gsap.from(".clip-center .marque", 5, {
      delay: 1,
      left: "-50%",
      ease: "power3.inOut",
    });

    gsap.to(".loader-top", 2, {
      delay: 6,
      clipPath: "inset(0 0 100% 0)",
      ease: "power4.inOut",
    });

    gsap.to(".loader-bottom", 2, {
      delay: 6,
      clipPath: "inset(100% 0 0 0)",
      ease: "power4.inOut",
    });

    gsap.to(
      ".loader-top .marque, .loader-bottom .marque, .clip-center .marque span",
      1,
      {
        delay: 6,
        opacity: 0,
        ease: "power2.inOut",
      }
    );

    gsap.to(".hero-paragraph", 1, {
      delay: 6.5,
      opacity: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <>
      <div className="loader">
        <div className="loader-clip loader-top">
          <div className="marque">
            <div className="marque-container">
              <span>Frontend</span>
              <span>Frontend</span>
              Developer
              <span>Frontend</span>
              <span>Frontend</span>
            </div>
          </div>
        </div>
        <div className="loader-clip loader-bottom">
          <div className="marque">
            <div className="marque-container">
              <span>Backend</span>
              <span>Backend</span>
              Developer
              <span>Backend</span>
              <span>Backend</span>
            </div>
          </div>
        </div>
        <div className="clip-center">
          <div className="marque">
            <div className="marque-container">
              <span>Rawan</span>
              <span>Rawan</span>
              Rawan
              <span>Rawan</span>
              <span>Rawan</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-container">
        <div className="nav">
          <Image src="/img/Rawan-logo.png" width={50} height={50} />
          <div className="nav-items">
            <a href="#Projects">Projects</a>
            <a href="#footer">Contact</a>
            {/* <a href=""> Info </a> */}
          </div>
        </div>
        <div className="hero-paragraph">
          Computer engineer focusing on web development, with experience in
          React js, Next js and Express js, and Laravel.
        </div>
        <div className="footer">
          <a href="https://github.com/0Rawan">Github</a>
          <a href="https://www.linkedin.com/in/rawan-mustafa-087725140/">
            Linkedin
          </a>
          <a href="mailto:00rawan.kamal@gmail.com">Email</a>
        </div>
      </div>
    </>
  );
}

export default Hero;
