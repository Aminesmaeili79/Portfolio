import React from 'react';

const ShowCase = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src={`${import.meta.env.BASE_URL}images/project1.png`} alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h2>
              <p className="text-white-50 md:text-xl">
                An app build with React Native, Expo, & TailwindCSS for a fast, user-friendly
                experience.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src={`${import.meta.env.BASE_URL}images/project2.png`}
                  alt="Library Management Platform"
                />
              </div>
              <h2>Library Management Platform</h2>
            </div>
            <div className="project">
              <div className="image-wrapper bg-[#ffe7db]">
                <img src={`${import.meta.env.BASE_URL}images/project3.png`} alt="YC Directory" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowCase;
