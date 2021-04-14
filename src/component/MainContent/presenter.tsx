import React from 'react';
import styled, { keyframes } from 'styled-components';
import mainImage from 'assets/images/lead-bg.jpg';

const MainContentPresenter = () => {
  return (
    <MainContainer id='lead'>
      <MainContent id='lead-content'>
        <NameForm>Ryan Fitzgerald</NameForm>
        <PositionForm>Software Engineer</PositionForm>
        <a href='#'>Download Resume</a>
      </MainContent>

      <MainOverlay id='lead-overlay'></MainOverlay>

      <MainDown id='lead-down'>
        <DownForm>
          <DownButton aria-hidden='true'></DownButton>
        </DownForm>
      </MainDown>
    </MainContainer>
  );
};

const Pulsate = keyframes`
    0% {
        transform: scale(1, 1);
    }

    50% {
        transform: scale(1.2, 1.2);
    }

    100% {
        transform: scale(1, 1);
    }
`;

const MainContainer = styled.div`
  position: relative;
  height: 100vh;
  min-height: 500px;
  max-height: 1080px;
  background-image: url(${mainImage});
  background-size: cover;
  padding: 15px;
  overflow: hidden;
`;

const MainContent = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const NameForm = styled.div`
  margin: 0;
  color: #fff;
  font-weight: 900;
  font-size: 5em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 0.9em;
`;

const PositionForm = styled.div`
  margin: 0;
  color: lighten(#3498db, 25%);
  font-weight: 500;
  font-size: 2.25em;
  margin-bottom: 15px;
`;

const MainOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(darken(#3498db, 10%) ;, 0.8);
  z-index: 1;
`;

const MainDown = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  z-index: 10;
  bottom: 15px;
  color: #fff;
`;

const DownForm = styled.span`
  cursor: pointer;
  display: block;
  margin: 0 auto;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 3px solid lighten(#3498db, 25%);
  text-align: center;
`;

const DownButton = styled.i`
  animation: ${Pulsate} 1.5s ease;
  animation-iteration-count: infinite;
  padding-top: 5px; ;
`;

export default MainContentPresenter;
