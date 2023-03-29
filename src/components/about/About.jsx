import React from 'react';
import "./about.css"
import AboutImg  from "../../assets/avatar-2.svg"
import Skills from './Skills';
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id="about">
      <div className="container">
        <h2 className="section__title">About Me</h2>
        <div className="about__container grid">
          <img src={AboutImg} alt="" className="about__img" />
          <div className="about__data grid">
            <div className="about__info">
              <p className="about__description">
                I am Mainak Biswas, Computer Science Engineer 
                from West Bengal, India. I have a rich experience 
                in Programming and Website Development and building.
              </p>
              <a href="../../assets/MainakBiswas_Resume.pdf" className="btn" target="__blank">Download CV</a>
      
            </div>

            <div className="about__skills grid">
              <Skills skillName="Development" skillNumber="90"></Skills>
              
              <Skills skillName="Programming" skillNumber="70"></Skills>
              
              <Skills skillName="UI/UX Design" skillNumber="80"></Skills>           
            </div>

          </div>
        </div>
        <AboutBox/>
      </div>
      
    </section>
  )
}

export default About