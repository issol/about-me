import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const EducationPresenter = () => {
  return (
    <Container id='education'>
      <Subject>Education</Subject>
      <Section>
        <School>국가평생교육진흥원 학점은행제</School>
        <Period>2016.03 - 2020.08</Period>
        <Major>컴퓨터공학</Major>
        <Description>컴퓨터공학 학사학위 취득</Description>
      </Section>

      <Section>
        <School>선린인터넷고등학교</School>
        <Period>2011.03 - 2014.02</Period>
        <Major>정보통신과</Major>
        <Description>선린인터넷고등학교 정보통신과 일반전형 입학</Description>
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
