import React from 'react';

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        const view = document.getElementById(id);
        if (view && id) {
          const target = view.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            behavior: 'smooth',
            top: target,
            left: view.getBoundingClientRect().left,
          });
        }
      }}
      className={`${className ?? ''} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle"></div>
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src={`${import.meta.env.BASE_URL}images/arrow-down.svg`} alt="arrow" />
        </div>
      </div>
    </a>
  );
};
export default Button;
