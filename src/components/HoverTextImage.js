import React from 'react'
import { gsap } from "gsap";


function HoverTextImage() {
  return (
    <li className="item"  onMouseEnter={(e) => gsap.to(e.target.firstChild, { autoAlpha: 1 })}
    onMouseLeave={(e) => gsap.to(e.target.firstChild, { autoAlpha: 0 })}
    onMouseMove={(e) =>
      { 
        const rect = e.currentTarget.getBoundingClientRect()
        // e.nativeEvent.offsetX  => works for react too!
        gsap.set(e.target.firstChild, { x: e.clientX  -  rect.width  /2, y:  e.clientY  - rect.top})
        }
    }
    >
      <img src="https://ct112013.files.wordpress.com/2013/07/pasteeel.jpg" />
      WOMAN
    </li>
  )
}

export default HoverTextImage