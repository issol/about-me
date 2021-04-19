import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutPresenter = () => {
  return (
    <Container id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <AboutHeader>About Me</AboutHeader>
          </div>
          <div className='col-md-8'>
            <AboutMe>
              <Introduce>😀 Why?를 항상 생각하는 개발자 </Introduce>
              <Introduce>😃 사용자 입장에서 생각하는 개발자</Introduce>
              <Introduce>🤔 개인보단 팀과의 협업의 중요성을 아는 개발자</Introduce>
            </AboutMe>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 75px 15px;
  border-bottom: 1px solid #dcd9d9;
`;

const AboutHeader = styled.h2`
  color: #374054;
  position: relative;
  display: inline-block;
  font-size: 2em;
  font-weight: 300;
  margin: 0 0 30px 0;

  &:after {
    position: absolute;
    content: '';
    top: 100%;
    height: 1px;
    width: 50px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: #3498db;
  }
`;

const AboutMe = styled.ul`
  margin: 0;
`;

const Introduce = styled.li`
  color: #74808a;
  margin: 0;
  font-size: 1.2em;
`;

// $base-color: #3498db;
// $base-color-hover: darken($base-color, 10%);

// // Define background colors
// $background: #fff;
// $background-alt: #f2f2f5;

// // Define border colors
// $border: #dcd9d9;

// // Define text colors
// $heading: #374054;
// $text: #74808a;

export default AboutPresenter;
