import React, { useState } from 'react';
import './education.css';
import './responsive.css';

const educationData = [
  {
    year: 'Apr 2024 - Jun 2024',
    description: 'Web Developer Internship',
    school: {
      name: 'Advanced Contact Center (ACC)',
      location: 'Bangkok, Thailand',
    },
  },
  {
    year: 'Jun 2024 - Current',
    description: 'Web Developer Part-time',
    school: {
      name: 'Advanced Contact Center (ACC)',
      location: 'Bangkok, Thailand',
    },
  },
  {
      year: 'Jul 2024 - Current',
      description: 'Computer Org. TA',
      school: {
        name: 'King Mongkut\'s Institute of Technology Ladkrabang',
        location: 'Bangkok, Thailand',
      },
  }
  // Add more entries as needed
];

export const Education = () => {
  const [expandedEntries, setExpandedEntries] = useState([]);

  const handleContainerClick = (index) => {
    if (expandedEntries.includes(index)) {
      setExpandedEntries(expandedEntries.filter((item) => item !== index));
    } else {
      setExpandedEntries([...expandedEntries, index]);
    }
  };

  return (
    <section className="edu" id="exp">
      <section className="edu__header">
        <h2> Experiences </h2>
      </section>
      <nav id='nav__edu'>
        {educationData.map((entry, index) => (
          <section
            key={index}
            className='nav__edu'
            onClick={() => handleContainerClick(index)}
            style={{
              height: expandedEntries.includes(index) ? '20rem' : '12rem',
              padding: expandedEntries.includes(index) ? '2rem 2rem 5rem 2rem' : '2rem',
              ...(window.innerWidth <= 1240 && {
                height: expandedEntries.includes(index) ? '25rem' : '12rem',
              }),
            }}
          >
            <section className='nav__edu--container'>
              <section className="nav__edu--left">
                {entry.year}
              </section>
              <section className="nav__edu--right">
                {entry.description}
              </section>
            </section>
            <section className='nav__edu--arrow'>
              <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="27" height="15" viewBox="0 0 27 15" fill="none" style={{rotate: expandedEntries.includes(index) ? '180deg' : '0deg'}}>
                <line x1="1" y1="-1" x2="17.4783" y2="-1" transform="matrix(0.706233 0.70798 -0.706233 0.70798 0.704102 1.00635)" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <line x1="1" y1="-1" x2="17.4783" y2="-1" transform="matrix(-0.706233 0.70798 -0.706233 -0.70798 25.8003 0)" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </section>
            <section className='nav__edu--container' style={{ display: expandedEntries.includes(index) ? 'block' : 'none', height: expandedEntries.includes(index) ? '0' : '10rem'}}>
              <section className="nav__edu--school">
                <h3>{entry.school.name}</h3>
                <h4>{entry.school.location}</h4>
              </section>
            </section>
          </section>
        ))}
      </nav>
    </section>
  );
};

export default Education;
