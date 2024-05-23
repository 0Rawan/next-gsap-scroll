import React from "react";

function Work() {
  return (
    <div className="section-flat">
      <div className="work-container">
        <p className="work-title">  How I work? 💻</p>
       
      </div>
     
      <div className="card-wrapper">
        {/* <!-- ============== card row ============== --> */}
        <div className="card-row">
          <div
            className="card blackglass"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h4 className="title">Clean Code</h4>
            <p className="description">
            I am committed to writing clean and efficient code that doesn't only
            save my time in debugging my code and pushing updates, also
            helps fellow developers to collaborate with me easily.
            </p>
          </div>
          <div
            className="card blackglass"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
           
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
            <h4 className="title">Adaptable</h4>
            <p className="description">
            I am always open to learning so I can quickly adapt to this
             rapidly evolving timeline as I have worked in multiple programming languages and frameworks.
            </p>
          </div>
          <div
            className="card blackglass"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h4 className="title"><small>Time Management</small></h4>
            <p className="description">
            To be honest, I have done Most projects for myself, I've also worked in teams,
            and Recoded Bootcamp taught me a lot about time management, I'm
            looking forward to getting more projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
