import React from 'react';

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-screen-desktop"></i>

        <div>
          <h3 className="about__title">10+</h3>
          <span className="about__subtitle">Project completed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-organization"></i>

        <div>
          <h3 className="about__title">270</h3>
          <span className="about__subtitle">Total Contributions</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-fire"></i>

        <div>
          <h3 className="about__title">4</h3>
          <span className="about__subtitle">Avg. Working Hours</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-loop"></i>

        <div>
          <h3 className="about__title">6</h3>
          <span className="about__subtitle">Longest Streak</span>
        </div>
      </div>
    </div>
  )
}

export default AboutBox
