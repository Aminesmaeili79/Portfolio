import React from 'react';
import { words } from '../Constants/index.js';
import Button from '../Components/Button.jsx';
import HeroModel from '../Components/HeroModels/HeroModel.jsx';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.hero-text h1',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.75,
        duration: 1,
        ease: 'power2.inOut',
      }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen px-5 md:px-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span key={word.text} className="flex items-center pb-2 gap-1 md:gap-3">
                        <span>
                          <img
                            src={word.imgPath}
                            alt={word.text}
                            className="size-7 md:size-10 xl:size-12 bg-white-50 p-1 rounded-full md:p-2"
                          />
                        </span>
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Amin. Web Developer And Coding Passionate Based In Cyprus 🇨🇾
            </p>
            <Button className={'md:w-80 md:h-16 w-60 h-12'} text={'See My Work'} id="button" />
          </div>
        </header>
        <figure>
          <div className="hero-3d-layout">
            <HeroModel />
          </div>
        </figure>
      </div>
    </section>
  );
};
export default Hero;
