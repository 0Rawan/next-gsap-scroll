import React from "react";

function Work() {
  return (
    <div className="section-flat">
      <h2 className="flat-heading" data-aos="fade-right" data-aos-delay="100">
        How I work? 💻
      </h2>
      <div className="card-wrapper">
        {/* <!-- ============== card row ============== --> */}
        <div className="card-row">
          <div
            className="card blackglass"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon bluie" data-aos="flip-up" data-aos-delay="400">
              <i className="fas fa-code" style={{ color: "#3fcdc7" }}></i>
            </div>
            <h4 className="title">Clean Code</h4>
            <p className="description">
              I am committed to write clean and efficient code that doesn't only
              save my time in debugging my code and pushing updates but also
              helps fellow developers to collaborate with me easily.
            </p>
          </div>
          <div
            className="card blackglass"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div
              className="icon pirplie"
              style={{ padding: "30px 35px" }}
              data-aos="flip-up"
              data-aos-delay="400"
            >
              <i
                className="fas fa-code-branch"
                style={{ color: "#bd8fe4" }}
              ></i>
            </div>
            <h4 className="title">Version Control</h4>
            <p className="description">
              Version Control is the most important habit a developer must
              follow in its day - to -day coding style. I have implemented it
              already in my workflow. So, now I encourage others to apply this.
            </p>
          </div>
          
          <div
            className="card blackglass"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div
              className="icon brownie"
              style={{ padding: "30px 32px" }}
              data-aos="flip-up"
              data-aos-delay="400"
            >
              <i className="fas fa-book" style={{ color: "#F3A712" }}></i>
            </div>
            <h4 className="title">Adaptable</h4>
            <p className="description">
              I am always open to learn and so I can quickly adapt in this
              rapidly evolving timeline as well as I also mentor my juniors very
              often if they're stuck somewhere in their journey to learn.
            </p>
          </div>
          <div
            className="card blackglass"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div
              className="icon greenie"
              style={{ padding: "30px 32px" }}
              data-aos="flip-up"
              data-aos-delay="400"
            >
              <i className="fas fa-stopwatch" style={{ color: "#61e786" }}></i>
            </div>
            <h4 className="title"><small>Time Management</small></h4>
            <p className="description">
              To be honest i had done Most projects for myself and i have done 5
              project for My College as these projects are realtime. I am
              looking forward to get more projects.
              {/* <br><br><b><big></big></b> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
