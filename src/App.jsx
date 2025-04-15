import React from 'react';
import Hero from './Sections/Hero.jsx';
import ShowCase from './Sections/ShowCase.jsx';
import NavBar from './Components/NavBar.jsx';
import Logos from './Sections/Logos.jsx';
import FeatureCards from './Sections/FeatureCards.jsx';
import Experience from './Sections/Experience.jsx';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCase />
      <Logos />
      <FeatureCards />
      <Experience />
    </>
  );
};
export default App;
