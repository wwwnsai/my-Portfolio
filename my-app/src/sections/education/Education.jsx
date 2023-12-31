import React, { useState } from 'react';
import './education.css';

const educationData = [
  {
    year: '2009 - 2015',
    description: 'Elementary - Middle School',
    school: {
      name: 'Patai Udom Suksa School',
      location: 'Bangkok, Thailand (International Program)',
    },
  },
  {
    year: '2015 - 2022',
    description: 'High School',
    school: {
      name: 'Bodindecha (Sing Singhaseni) School',
      location: 'Bangkok, Thailand (Science-Math Program)',
    },
  },
  {
    year: '2018 - 2019',
    description: 'High School',
    school: {
      name: 'MacArthur High School',
      location: 'Texas, USA (Exchange Student Program)',
    },
  },
{
    year: '2022 - 2026',
    description: 'Undergraduate School',
    school: {
      name: 'King Mongkut\'s Institute of Technology Ladkrabang',
      location: 'Bangkok, Thailand (Software Engineering)',
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
    <section className="edu" id="edu">
      <section className="edu__header">
        <h2> Education </h2>
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
                <line x1="1" y1="-1" x2="17.4783" y2="-1" transform="matrix(0.706233 0.70798 -0.706233 0.70798 0.704102 1.00635)" stroke="black" stroke-width="2" stroke-linecap="round"/>
                <line x1="1" y1="-1" x2="17.4783" y2="-1" transform="matrix(-0.706233 0.70798 -0.706233 -0.70798 25.8003 0)" stroke="black" stroke-width="2" stroke-linecap="round"/>
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
