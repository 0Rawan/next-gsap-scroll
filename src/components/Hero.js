import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
function Hero() {
  const rocketRef = useRef(null);
  const upRef = useRef(null);
  const logoRef = useRef(null);
  const paraGRef = useRef(null);
  const boxRef = useRef(null);
  const boxesRef = useRef([]);
  const kamalRef = useRef([]);

  useGSAP(() => {
    // const rocketanim = rocketAnimation();
    const t1 = gsap.timeline();
    t1.from(upRef.current, {
      scale: 0,
      x: 0,
      duration: 2,
    })
      .from(boxesRef.current, {
        duration: 1,
        y: -400,
        display: "inline-block",
        skewX: 30,
        stagger: 0.1,
        onComplete: () => {
          console.log("Stagger animation completed");
        },
      })
      .from(kamalRef.current, {
        y: 400,
        display: "inline-block",
        skewX: 30,
        stagger: 0.1,
        onComplete: () => {
          console.log("Stagger animation completed");
        },
      })
      .from(
        paraGRef.current,
        {
          y: -150,
          opacity: 0,
        },
        "-=0.3"
      )
      .from(
        boxRef.current,
        {
          y: -150,
          opacity: 0,
        },
        "-=0.3"
      );
    return () => {
    
    };
  }, []);

  return (
    <>
      <div className="box"> box</div>
      <header>
        <div className="logo">
          <div className="Lround" ref={boxRef}></div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <div className="sideline">
          <div className="line">
            <div className="L lone">
              <span></span>
            </div>
            <div className="L ltwo">
              <span></span>
            </div>
            <div className="L lthree">
              <span></span>
            </div>
          </div>
        </div>
        <div className="heading">
          <div className="up" ref={upRef}>
            <img src="./img/1.png" className="laptop" />

            <div className="Htag">
              <img src="./img/10.png" className="target" alt="" />
              <img src="./img/3.png" className="task" alt="" />
              <img
                src="./img/8.png"
                className="rocket"
                alt=""
                ref={rocketRef}
              />
              <img src="./img/6.png" className="ads" alt="" />

              <h1 className="h1">
                {"Rawan".split("").map((_, index) => (
                  <span
                    key={index}
                    className="box"
                    ref={(el) => (boxesRef.current[index] = el)}
                  >
                    {"RAWAN".charAt(index)}
                  </span>
                ))}
              </h1>
              <h1 className="h2">
                {"KAMAL".split("").map((_, index) => (
                  <span
                    key={index}
                    className="box"
                    ref={(el) => (kamalRef.current[index] = el)}
                  >
                    {"KAMAL".charAt(index)}
                  </span>
                ))}
              </h1>
            </div>
          </div>
          <div className="down">
            <div className="social">
              <div className="solink">
                <ul>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="paraG" ref={paraGRef}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                repellendus nobis a debitis et minus harum est. Similique
                explicabo rerum voluptatibus deserunt corporis, sunt sequi quia
                aliquid libero, culpa blanditiis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
