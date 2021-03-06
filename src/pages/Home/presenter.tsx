import About from 'component/About';

import Education from 'component/Education';
import Footer from 'component/Footer';
import Header from 'component/Header';
import MainContent from 'component/MainContent';
import Project from 'component/Project';
import SelfInterview from 'component/SelfInterview';
import Skills from 'component/Skills';
import React from 'react';

const HomePresenter = () => {
  return (
    <>
      <Header />
      <MainContent />
      <About />
      <SelfInterview />
      <Education />
      <Project />
      <Skills />

      <Footer />
    </>
  );
};

export default HomePresenter;
