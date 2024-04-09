import React from 'react';

const Skills = () => {
  return (
    <div name='skills' className='skills'>
      {/* Container */}
      <div className='skills-container'>
          <div>
              <p className='skills-title'>Skills</p>
              <p className='skills-description'>// These are the technologies I've worked with</p>
          </div>

          <div className='skills-grid'>
              <div className='skill-item'>
                  <img className='skill-icon' src='./assets/html.png' alt="HTML icon" />
                  <p className='skill-name'>HTML</p>
              </div>
              <div className='skill-item'>
                  <img className='skill-icon' src='./assets/css.png' alt="HTML icon" />
                  <p className='skill-name'>CSS</p>
              </div>
              <div className='skill-item'>
                  <img className='skill-icon' src='./assets/javascript.png' alt="HTML icon" />
                  <p className='skill-name'>JAVASCRIPT</p>
              </div>
              <div className='skill-item'>
                  <img className='skill-icon' src='./assets/react.png' alt="HTML icon" />
                  <p className='skill-name'>REACT</p>
              </div>
              <div className='skill-item'>
                  <img className='skill-icon' src='./assets/github.png' alt="HTML icon" />
                  <p className='skill-name'>GITHUB</p>
              </div>
              <div className='skill-item'>
                  <img className='skill-icon' src='./assets/node.png' alt="HTML icon" />
                  <p className='skill-name'>NODE JS</p>
              </div>
              <div className='skill-item'>
                  <img className='skill-icon' src='./assets/mongo.png' alt="HTML icon" />
                  <p className='skill-name'>MONGO DB</p>
              </div>
              <div className='skill-item'>
                  <img className='skill-icon' src='./assets/tailwind.png' alt="HTML icon" />
                  <p className='skill-name'>TAILWIND</p>
              </div>
              <div className='skill-item'>
                  <img className='skill-icon' src='./assets/firebase.png' alt="HTML icon" />
                  <p className='skill-name'>FIREBASE</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;