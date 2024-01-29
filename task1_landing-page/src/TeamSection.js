import React from 'react';
import person1 from './images/person_1.jpg';
import person2 from './images/person_2.jpg';
import person3 from './images/person_3.jpg';
import person4 from './images/person_4.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      image: person1,
      name: 'Lawson Arnold',
      role: 'CEO, Founder, Atty.',
      description: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      image: person2,
      name: 'Jeremy Walker',
      role: 'CEO, Founder, Atty.',
      description: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      image: person3,
      name: 'Patrik White',
      role: 'CEO, Founder, Atty.',
      description: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      image: person4,
      name: 'Kathryn Ryan',
      role: 'CEO, Founder, Atty.',
      description: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
  ];

  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="section-title">Our Team</h2>
          </div>
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img src={member.image} className="img-fluid mb-5" alt={`Team Member ${index + 1}`} />
              <h3 className="clas">
                <a href="{#}">
                  <span className="text-black">{member.name}</span>
                </a>
              </h3>
              <span className="d-block position mb-4 ">{member.role}</span>
              <p>{member.description}</p>
              <p className="mb-0">
                <a href="{#}" className="more dark text-black">
                  Learn More <span className="icon-arrow_forward"></span>
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
