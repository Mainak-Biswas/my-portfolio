import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="container">
        <div className="intro">
          <img src={Me} alt="" className="home__img" />
          <h1 className="home__name">Mainak Biswas</h1>
          <span className="home__education">I am a Computer Science Engineer</span>

          <HeaderSocials />

          <a href="#contact" className="btn">Hire Me</a>

          <ScrollDown />
        </div>
      </div>
      
    </section>
  )
}

export default Home