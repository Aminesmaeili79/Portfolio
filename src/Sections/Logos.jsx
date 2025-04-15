import React from 'react';
import { logoIconsList } from '../Constants/index.js';

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name || 'Technology logo'} className="h-12 w-auto" />
    </div>
  );
};

const Logos = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-container">
          <div className="marquee-box">
            {logoIconsList.map((icon, index) => (
              <LogoIcon key={`logo-1-${index}`} icon={icon} />
            ))}
          </div>

          <div className="marquee-box">
            {logoIconsList.map((icon, index) => (
              <LogoIcon key={`logo-2-${index}`} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
