import React, { forwardRef } from 'react';

const Header = forwardRef((props, ref) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="Header" className='header-section' ref={ref}>
      <h1> MID-FiLD : MIDI Dataset for Fine-Level Dynamics </h1>
      <div className='nav'>
        <button onClick={() => scrollToSection("Intro")}>Intro</button>
        <button onClick={() => scrollToSection("Dataset")}>Dataset</button>
        <button onClick={() => scrollToSection("Results")}>Results</button>
      </div>
    </div>
  );
});

export default Header;
