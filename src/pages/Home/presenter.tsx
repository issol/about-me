import About from 'component/About';
import Contact from 'component/Contact';
import Education from 'component/Education';
import Footer from 'component/Footer';
import Header from 'component/Header';
import MainContent from 'component/MainContent';
import Project from 'component/Project';
import Skills from 'component/Skills';
import React from 'react';

const HomePresenter = () => {
  return (
    <>
      <Header />
      <MainContent />
      <About />
      <Education />
      <Project />
      <Skills />

      <Footer />
    </>
  );
};

export default HomePresenter;
