import About from 'component/About';
import Header from 'component/Header';
import MainContent from 'component/MainContent';
import React from 'react';

const HomePresenter = () => {
  return (
    <>
      <Header />
      <MainContent />
      <About />
    </>
  );
};

export default HomePresenter;
