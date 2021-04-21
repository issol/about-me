import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  dropAnswerRef: React.MutableRefObject<null>;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  questions: string[];
  answers: string[];
};

export type DropDownRef = {
  isActive: boolean;
};

const SelfInterviewPresenter = ({ dropAnswerRef, isActive, setIsActive, questions, answers }: Props) => {
  return (
    <Container id='self-interview'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <SelfInterviewHeader>Self Interview</SelfInterviewHeader>
          </div>
          <div className='col-md-8'>
            {questions.map((question) => {
              return (
                <InterviewContainer ref={dropAnswerRef} isActive={isActive}>
                  <InterViewQuestion>
                    <i className='fas fa-sort-down'></i>
                    {question}
                  </InterViewQuestion>
                </InterviewContainer>
              );
            })}
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

const SelfInterviewHeader = styled.h2`
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

const InterviewContainer = styled.div<DropDownRef>`
  background-color: white;

  width: 95%;

  border-radius: 10px;
  color: #adaeb9;
`;

const InterViewQuestion = styled.div`
  color: #74808a;
  margin: 0;
  font-size: 1.2em;
`;

const DropDownButton = styled.i`
  margin-right: 10px;
`;

const Answer = styled.div<DropDownRef>`
  opacity: ${(props) => (props.isActive ? '1;' : '0;')};
  transform: ${(props) => (props.isActive ? 'translateY(0);' : 'translateY(-20px);')};
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
`;

export default SelfInterviewPresenter;
