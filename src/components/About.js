import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import HoverTextImage from "./HoverTextImage";

function About() {
  return (
    <div className="working-ul">
     
        <p>
            Hello, I `&apos;`m Rawan I like to create creative  and interactive digital experiences, 
            that `&apos;`s what made me a  <HoverTextImage image="https://xbsoftware.com/wp-content/uploads/2023/03/website-development-process-full-guide-1-twi.jpg">web</HoverTextImage> developer, I can do <HoverTextImage image="https://ih1.redbubble.net/image.1936037360.2703/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg">front end</HoverTextImage> and  <HoverTextImage image="https://res.cloudinary.com/practicaldev/image/fetch/s---19xC9UH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gfmus48wg13losu6uor6.jpg">back end</HoverTextImage> development.
            When I `&apos;`m out of ideas I either bake some <HoverTextImage image="./img/dolma.jpg">dolams</HoverTextImage>,  or play <HoverTextImage image="https://assets-global.website-files.com/618d852d383de946ce0e3fa5/6495da7241185414c12ddc02_videoGamePlanet.PNG">video games</HoverTextImage>.
        </p>
    </div>
  )
}

export default About