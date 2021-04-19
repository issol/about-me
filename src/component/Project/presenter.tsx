import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectPresenter = () => {
  return (
    <Container id='projects'>
      <ProjectHeader>Projects</ProjectHeader>
      <div className='container'>
        <div className='row'>
          <Section>
            <ProjectInfo>
              <ProjectName>Mind Note</ProjectName>
              <ProjectDescription>
                서로 연관 없는 아이디어들을 연관시키는 과정에서 얻은 이유들로 글쓰기를 도와주는 서비스
              </ProjectDescription>
              <View href='https://mindnote.kr' target='_blank'>
                View Project
              </View>
              <View href='https://www.notion.so/MindNote-d010f2741ed749debd2a8c12c0d7a1cc' target='_blank'>
                View Description
              </View>
            </ProjectInfo>
          </Section>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px 15px;
  border-bottom: 1px solid $border;
  text-align: center;
  background: #f2f2f5;
`;

const Section = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto 30px auto;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.15);
`;

const ProjectHeader = styled.h2`
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

const ProjectInfo = styled.div`
  position: relative;
  margin: 0;
  padding: 30px 15px;
  transform: none;
`;
const ProjectName = styled.h3`
  font-size: 1.5em;
  font-weight: 300;
  color: #374054;
  margin: 0 0 15px 0;
`;

const ProjectDescription = styled.p`
  color: #74808a;
  margin: 0 0 15px 0;
  font-size: 0.9em;
`;

const View = styled.a`
  margin: 20px;
`;

export default ProjectPresenter;
