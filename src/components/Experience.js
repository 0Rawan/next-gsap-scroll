import React from "react";
import { data } from "../data/data";

const Experience = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div id="Projects" name="work" className="work">
      <div className="work-container">
        <p className="work-title">Projects</p>
        <p className="work-description">
          These are the Projects that I `&apos;`ve built
        </p>
      </div>
      {/* Container */}
      <div class="row">
        <div class="col -lg-12">
          <div class="featuredPropBox">
            <ul>
              <li>
                {" "}
                <a href="https://github.com/0Rawan/kunfit">
                  <div class="fplogo">Kunfit</div>
                  <div class="fptext">
                    <p>
                      This project is a comprehensive exercise and nutrition
                      management website that empowers users to take control of
                      their fitness journey. It provides a seamless platform to
                      plan workouts, monitor nutrition, and even incorporates
                      machine learning for enhanced user engagement.
                    </p>
                  </div>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="https://github.com/0Rawan/metrak">
                  <div class="fplogo">Metrak</div>
                  <div class="fptext">
                    <p>
                      MERN stack-powered web service project! We `&apos;`ve built a
                      feature-rich web application that caters to our customers `&apos;`
                      needs using the modern and robust MERN stack.
                    </p>
                  </div>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="https://notfllix.netlify.app/">
                  <div class="fplogo">Notflix</div>
                  <div class="fptext">
                    <p>
                      This project is a one week team project for our Re:Coded
                      Fullstack Web Developement Bootcamp. It `&apos;`s a movie browsing
                      website where you can search & browse for movies, actors,
                      genres, and showcasing the latest and most popular movies.
                      The website design is sleek, intuitive, and responsive,
                      ensuring accessibility across different devices and screen
                      sizes.
                    </p>
                  </div>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a href="https://sarahah.netlify.app">
                  <div class="fplogo">Sarahah</div>
                  <div class="fptext">
                    <p>
                      This is a simple clone for the famous Sarahah website,
                      built using mern stack.
                    </p>
                  </div>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="https://github.com/0Rawan/fun-app">
                  <div class="fplogo">Partystation</div>
                  <div class="fptext">
                    <p>
                      This porject I build While I was trainee in company, it `&apos;`s
                      for startup company thad needed a store and landing page
                      connected to a dashboard, built with laravel.
                    </p>
                  </div>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  <div class="fplogo">Antyeek</div>
                  <div class="fptext">
                    <p>
                      A landing page and a dashboard for Saloons Booking app,
                      using laravel.
                    </p>
                  </div>
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
