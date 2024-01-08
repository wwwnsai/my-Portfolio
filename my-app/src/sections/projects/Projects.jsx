import React, { useState } from 'react';
import './projects.css';
import './responsive.css';

const Projects = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const projects = [
    {
      id: 1,
      type: 'Python',
      title: 'StudyBuddy',
      description:
        'Project Python Language-based with Pygame Library. Developed a timer and MP3 player designed to aid in studying or focusing. Utilized knowledge of the Python language and basic computer programming skills to create a functional and effective tool.',
      background: 'radial-gradient(50% 50% at 50% 50%, rgba(208, 148, 245, 0.50) 0%, #A6CFE6 100%)',
      video: '/videos/studybuddy_clip.mp4',
    },
    {
      id: 2,
      type: 'OOP',
      title: 'Ultimate Alien Contact Book',
      description:
        'Group project of 3 C++ Language-based. This project aims to enhance Object-Oriented Programming knowledge by creating a contact book with multiple features. The system includes functionalities such as login, logout, and register systems, as well as the ability to search for contacts, providing a practical application for learning and implementing C++ programming concepts.',
      background: 'radial-gradient(50% 50% at 50% 50%, rgba(166, 207, 230, 0.50) 0%, rgba(226, 84, 57, 0.80) 100%)',
      video: '/videos/AltimateAlienContactbook_clip.mp4',
    },
    {
      id: 3,
      type: 'Game Dev',
      title: 'MeowXMonster Game',
      description:
        'This Assembly and C Language group project of 6 is a Raspberry Pi game using Raylib for GUI support. Combining tower defense and third-person shooting, it demonstrates the integration of low-level programming with higher-level languages. Leveraging Raspberry Pi and Raylib, it creates a captivating gaming experience.',
      background: 'radial-gradient(50% 50% at 50% 50%, rgba(226, 84, 57, 0.50) 0%, #FFE176 100%)',
      video: '/videos/MeowXMonster_clip.mp4',
    },
    {
      id: 4,
      type: 'Web Dev',
      title: 'Software Engineering Hub',
      description:
        'The group project of 3 involves the utilization of HTML, CSS, Javascript, and Python languages, along with Fast API, to enhance the Software Engineering KMITL website. The focus is on implementing new features such as locker reservation and item borrowing, aiming to improve the overall functionality and user experience of the website.',
      background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 225, 118, 0.50) 0%, #D094F5 100%)',
      video: '/videos/SoftwareEngineeringHub_clip.mp4',
    }
  ];

  const handleItemHover = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  return (
    <section className="projects" id="projects">
      <section className="projects__header">
        <h2> Projects </h2>
      </section>
      <section className="projects__body">
        <section className="projects__container">
          {projects.map((project) => (
            <section
              key={project.id}
              className="projects__body--item"
              id={`project${project.id}`}
              style={{
                background: hoveredItem === project.id ? 'transparent' : project.background,
                opacity: hoveredItem === project.id || hoveredItem === null ? 1 : 0,
                width: hoveredItem === project.id ? '100%' : 'calc(25% - 5rem)',
                ...(window.innerWidth <= 1366 && { 
                  width: '95%',
                }),
                ...(window.innerWidth <= 1180 && {
                  width: '94%',
                }),
                ...(window.innerWidth <= 1024 && { 
                  width: '92%',
                }),

              }}
              
              onMouseEnter={() => handleItemHover(project.id)}
              onMouseLeave={handleItemLeave}
            >
              <section className="item--covertext">
                {hoveredItem === project.id && hoveredItem !== null ? (
                    <section className="hovered-styles"
                    style={{
                      alignItems: 'left',
                    }}>
                      <section className="hovered-styles--video">
                        <video controls autoPlay>
                          <source src={project.video} type='video/mp4'/>
                          Your browser does not support the video tag.
                        </video>
                      </section>
                      <section className="hovered-styles--text">
                        <h2>{String(project.id).padStart(2, '0')}</h2>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                      </section>
                    </section>
                  ) : (
                    <>
                      <h1>{String(project.id).padStart(2, '0')}</h1>
                      <h3>{project.type}</h3>
                    </>
                  )}

              </section>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
  
};

export default Projects;
