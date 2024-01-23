import React from 'react';


const StickyNav = ({ isVisible }) => {
  if (!isVisible) return null;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky-nav">
        <button onClick={() => scrollToSection("Intro")}>Intro</button>
        <button onClick={() => scrollToSection("Dataset")}>Dataset</button>
        <button onClick={() => scrollToSection("Results")}>Results</button>
    </div>
  );
};

export default StickyNav;
