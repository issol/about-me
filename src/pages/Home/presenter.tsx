import About from 'component/About';
import Education from 'component/Education';
import Header from 'component/Header';
import MainContent from 'component/MainContent';
import React from 'react';

const HomePresenter = () => {
  return (
    <>
      <Header />
      <MainContent />
      <About />
      <Education />
    </>
  );
};

export default HomePresenter;
