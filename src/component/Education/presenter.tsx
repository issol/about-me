import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const EducationPresenter = () => {
  return (
    <Container id='education'>
      <Subject>Education</Subject>
      <Section>
        <School>University of Ottawa</School>
        <Period>Sept 2016 - Sept 2017</Period>
        <Major>Bachelor of Science in Computer Science</Major>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut
          tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet
          placerat.
        </Description>
      </Section>

      <Section>
        <School>University of Ottawa</School>
        <Period>Sept 2016 - Sept 2017</Period>
        <Major>Bachelor of Science in Computer Science</Major>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px 15px 20px 15px;
  border-bottom: 1px solid #dcd9d9;
  text-align: center;
`;

const Subject = styled.h2`
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

const Section = styled.div`
  max-width: 700px;
  margin: 0 auto 30px auto;
  padding: 15px;
  border: 1px solid #dcd9d9;
  text-align: left;
`;

const School = styled.h3`
  font-weight: 500;
  float: left;
  margin: 0;
  color: #374054;
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Period = styled.span`
  color: #74808a;
  float: right;
`;

const Major = styled.h4`
  color: #74808a;
  clear: both;
  font-weight: 500;
  margin: 0 0 15px 0;
  font-size: 1em;
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Description = styled.p`
  margin: 0;
  color: #74808a;
  font-size: 0.9em;
`;

export default EducationPresenter;

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
