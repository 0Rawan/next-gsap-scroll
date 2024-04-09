import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import HoverTextImage from "./HoverTextImage";

function About() {
  return (
    <div className="working-ul">
     
        <p>
            Hello, I'm Rawan I like to create creative  and interactive digital experiences, 
            that's what made me a  <HoverTextImage>web</HoverTextImage> developer, I can do <HoverTextImage>front end</HoverTextImage> and  <HoverTextImage>back end</HoverTextImage> development.
            When I'm out of ideas I either bake some <HoverTextImage>pizza</HoverTextImage> or <HoverTextImage>dolams</HoverTextImage>,  or play <HoverTextImage>video games</HoverTextImage>.
        </p>
    </div>
  )
}

export default About