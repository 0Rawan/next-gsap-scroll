import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import HoverTextImage from "./HoverTextImage";
function WorkingLibraries() {
  useGSAP(() => {});

  return (
    <section>
      <button onClick={() => console.log("button")}>button</button>
      <ul
        className="working-ul cursor"
       
      >
        <HoverTextImage/>
        <HoverTextImage/>
        <HoverTextImage/>
        <li className="item">
          <img src="https://i.pinimg.com/736x/1a/e9/ff/1ae9ff68eddb75113cc797f1324515b9--color-coordination-reiss.jpg" />
          MAN
        </li>
        <li className="item">
          <img src="http://www.todaysparent.com/wp-content/uploads/2014/02/Mint1.jpg" />
          KID
        </li>
      </ul>
    </section>
  );
}

export default WorkingLibraries;
