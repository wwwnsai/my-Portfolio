import React, { useState } from 'react';
import './projects.css';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const projects = [
    {
      id: 1,
      title: 'StudyBuddy',
      description:
        'Project Python Language-based with Pygame Library. Developed a timer and MP3 player designed to aid in studying or focusing. Utilized knowledge of the Python language and basic computer programming skills to create a functional and effective tool.',
    },
    {
      id: 2,
      title: 'Ultimate Alien Contact Book',
      description:
        'Group project of 3 C++ Language-based. This project aims to enhance Object-Oriented Programming knowledge by creating a contact book with multiple features. The system includes functionalities such as login, logout, and register systems, as well as the ability to search for contacts, providing a practical application for learning and implementing C++ programming concepts.',
    },
    {
      id: 3,
      title: 'MeowXMonster Game',
      description:
        'This Assembly and C Language group project of 6 is a Raspberry Pi game using Raylib for GUI support. Combining tower defense and third-person shooting, it demonstrates the integration of low-level programming with higher-level languages. Leveraging Raspberry Pi and Raylib, it creates a captivating gaming experience.',
    },
    {
      id: 4,
      title: 'Software Engineering Hub',
      description:
        'The group project of 3 involves the utilization of HTML, CSS, Javascript, and Python languages, along with Fast API, to enhance the Software Engineering KMITL website. The focus is on implementing new features such as locker reservation and item borrowing, aiming to improve the overall functionality and user experience of the website.'
    }
  ];

  const handleSlideChange = (direction) => {
    if (direction === 'left') {
      setCurrentSlide((prevSlide) => (prevSlide === 1 ? 4 : prevSlide - 1));
    } else {
      setCurrentSlide((prevSlide) => (prevSlide === 4 ? 1 : prevSlide + 1));
    }
  };

  // ... (previous code)

  return (
    <section className="projects" id="projects">
      <section className="projects__header">
        <h2> Projects </h2>
      </section>
      <section className="projects__body">
        <section className="projects__body__carousel">
          {/* Left Arrow */}
          <section
            className="carousel__item__arrow__icon"
            onClick={() => handleSlideChange('left')}
          >
            <svg
              id="arrow_left"
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="67"
              viewBox="0 0 37 67"
              fill="none"
            >
              <path
                d="M33.3323 3L3.00004 33.3322"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M32.3109 63.6646L3.31091 34.6645"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </section>

          {/* Carousel Items */}
          {projects.map((project) => (
            <section
              key={project.id}
              className={`carousel__item` }
              style={{
                display: project.id === currentSlide ? 'flex' : 'none',
                transform: `translateX(${
                  (project.id - currentSlide) * 100
                }%)`,
              }}
            >
              {project.id === currentSlide && (
                <>
                  <section className="carousel__item__video">
                    <video controls>
                      <source
                        src={`/videos/studybuddy_clip.mp4`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </section>
                  <section className="carousel__item--text">
                    <section className="text--header">
                      <h1 style={{ color: 'var(--orange-secondary)' }}>
                        {String(project.id).padStart(2, '0')}
                      </h1>
                      <h3>{project.title}</h3>
                    </section>
                    <section className="text--body">
                      {project.description}
                    </section>
                  </section>
                </>
              )}
            </section>
          ))}

          {/* Right Arrow */}
          <section
            className="carousel__item__arrow__icon"
            onClick={() => handleSlideChange('right')}
          >
            <svg
              id="arrow_right"
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="67"
              viewBox="0 0 37 67"
              fill="none"
            >
              <path
                d="M3 63.6646L33.3322 33.3323"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.02124 3L33.0212 32"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </section>
        </section>
      </section>
    </section>
  );

};

export default Projects;
