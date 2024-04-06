import React from "react";
function Hero() {
  return (
    <>
      <header>
      <div className="logo">
      <div className="Lround"></div>
      </div>
      <nav>
        <ul>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    
    </header>

    <div className="container">
      <div className="sideline">
        <div className="line">
          <div className="L lone"> <span></span></div>
          <div className="L ltwo"> <span></span></div>
          <div className="L lthree"> <span></span></div>
        </div>
      </div>
      <div className="heading">
        <div className="up">
          <div className="Htag">
          <img src="./img/10.png" className="target" alt="" />
          <img src="./img/3.png" className="task" alt="" />
          <img src="./img/8.png" className="rocket" alt="" />
          <img src="./img/6.png" className="ads" alt="" />

            <h1 className="h1">
              <span>R</span>
              <span>A</span>
              <span>W</span>
              <span>A</span>
              <span>N</span>
            </h1>
            <h1 className="h2">
              <span>K</span>
              <span>A</span>
              <span>M</span>
              <span>A</span>
              <span>L</span>
            </h1>
          </div>
        </div>
        <div className="down">
          <div className="social">
            <div className="solink">
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Facebook</a></li>
                
              </ul>
            </div>
          </div>
          <div className="paraG">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus nobis a debitis et minus harum est. Similique explicabo rerum voluptatibus deserunt corporis, sunt sequi quia aliquid libero, culpa blanditiis!</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Hero;
