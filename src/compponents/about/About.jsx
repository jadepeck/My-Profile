import React from 'react';
import "./about.css";
import Me from "../../assets/122541242 (1).svg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">
        About Me
      </h2>
      <div className="about__container grid">
        <img src={Me} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about info">
            <p className="about__description">
            Nice to meet you I'm P.J. Taron. A passionate frontend developer from Thailand. Looking for opportunities in Japan !
            </p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills_name">Front-end</h3>
                <span className="skills_number">90%</span>

              </div>
              <div className="skills__bar">
                <span className="skills__percentage front_end"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills_name">Back-end</h3>
                <span className="skills_number">70%</span>

              </div>
              <div className="skills__bar">
                <span className="skills__percentage back_end"></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About
