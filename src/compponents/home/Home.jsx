import React from 'react';
import "./home.css";
import Me from "../../assets/122541242 (1).svg";
import HeaderSocials from './HeaderSocials'

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">P.J. Taron</h1>
        <span className="home__education">I'm a Front-End developer
        </span>

        <HeaderSocials/>
      </div>
    </section>
  )
}

export default Home
