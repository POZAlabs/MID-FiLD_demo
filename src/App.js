import React, { useState, useEffect, useRef } from 'react';
import Intro from "./components/Intro";
import Dataset from "./components/Dataset";
import Results from "./components/Results";
import Header from "./components/Header";
import StickyNav from './components/StickyNav';

function App() {
  const [isStickyNavVisible, setStickyNavVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const headerHeight = headerRef.current.offsetHeight;

    const scrollListener = () => {
      const shouldBeVisible = window.scrollY > headerHeight;
      setStickyNavVisible(shouldBeVisible);
    };

    window.addEventListener('scroll', scrollListener);

    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <div className="App">
      <Header ref={headerRef} />
      <section id="Intro">
        <Intro />
      </section>
      <section id="Dataset">
        <Dataset />
      </section>
      <section id="Results">
        <Results />
      </section>
      <StickyNav isVisible={isStickyNavVisible} />
    </div>
  );
}

export default App;
