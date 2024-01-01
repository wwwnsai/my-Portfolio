import React, { useEffect, useState } from 'react';
import './projects.css';

const Projects = () => {
    
  return (

    <section className="projects" id="projects">
        <section className='projects__header'>
            <h2> Projects </h2>
        </section>
        <section className='projects__body'>
            <section className='projects__body__carousel'>

              <section className='carousel__item__arrow__icon'>
                <svg id='arrow_left' xmlns="http://www.w3.org/2000/svg"  width="37" height="67" viewBox="0 0 37 67" fill="none">
                  <path d="M33.3323 3L3.00004 33.3322" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M32.3109 63.6646L3.31091 34.6645" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </section>

              <section className='carousel__item'>
                <section className='carousel__item__video'>
                  
                  <video width="640" height="360" controls>
                    <source src="/videos/studybuddy_clip.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
                </section>
                <section className='carousel__item--text'>
                  <section className='text--header'>
                    <h3> StudyBuddy </h3>
                  </section>
                  <section className='text--body'>
                  
                  </section>
                </section>
                {/* <section className='carousel__item__arrow'> */}
                  
                    
                  
                {/* </section> */}

              </section>

              {/* <section className='carousel__item'>
                <section className='carousel__item__header'>

                </section>
                <section className='carousel__item__video'>
                
                </section>
                <section className='carousel__item__body'>
                
                </section>
              </section>

              <section className='carousel__item'>
                <section className='carousel__item__header'>

                </section>
                <section className='carousel__item__video'>
                
                </section>
                <section className='carousel__item__body'>
                
                </section>
              </section>

              <section className='carousel__item'>
                <section className='carousel__item__header'>

                </section>
                <section className='carousel__item__video'>
                
                </section>
                <section className='carousel__item__body'>
                
                </section>
              </section> */}

                  <section className='carousel__item__arrow__icon'>
                    <svg id='arrow_right' xmlns="http://www.w3.org/2000/svg" width="37" height="67" viewBox="0 0 37 67" fill="none">
                      <path d="M3 63.6646L33.3322 33.3323" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M4.02124 3L33.0212 32" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </section>
            </section>
        </section>

    </section>


  );
}

export default Projects;