import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const SkillsPresenter = () => {
  return (
    <Container id='skills'>
      <SkillsHeader>Skills</SkillsHeader>
      <SkillList>
        <Skill>HTML5</Skill>
        <Skill>JavaScript</Skill>
        <Skill>TypeScript</Skill>
        <Skill>Python</Skill>
        <Skill>React</Skill>
        <Skill>React-Redux</Skill>
        <Skill>Redux-saga</Skill>
        <Skill>Git</Skill>
      </SkillList>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px 15px;
  text-align: center;
`;

const SkillsHeader = styled.h2`
  color: #374054;
  position: relative;
  display: inline-block;
  font-size: 2em;
  font-weight: 300;
  margin-bottom: 50px;

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

const SkillList = styled.ul`
  display: block;
  margin: 0 auto;
  padding: 0;
  max-width: 800px;
`;

const Skill = styled.li`
  display: inline-block;
  margin: 7px;
  padding: 5px 10px;
  color: #374054;
  background: #f2f2f5;
  list-style: none;
  cursor: default;
  font-size: 1.2em;
`;

export default SkillsPresenter;
