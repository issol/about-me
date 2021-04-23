import React, { useEffect, useRef, useState } from 'react';
import SelfInterviewPresenter from './presenter';

export type SelfInterViewType = {
  questions: { id: number; question: string; isActive: boolean }[];
  answers: { id: number; answer: string }[];
};

const SelfInterviewContainer = () => {
  const dropAnswerRef = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const [selfInterview, setSelfInterview] = useState<SelfInterViewType>({
    questions: [
      { id: 1, question: '언제부터 지금의 직무에 관심을 갖게 되었나요?', isActive: false },
      { id: 2, question: '일에 있어가장 중요하게 생각하는 것이 있다면 ?', isActive: false },
      { id: 3, question: '학창시절의 경험 중 가장 멋진 경험을 들려주세요.', isActive: false },
    ],
    answers: [
      { id: 1, answer: '1dd' },
      { id: 2, answer: '2dd' },
      { id: 3, answer: '3dd' },
    ],
  });

  const handleListDropDown = (idx: number) => {
    const updateIsActive = selfInterview.questions.map((question, index) => {
      if (idx === index) {
        return { ...question, isActive: !question.isActive };
      }
      return question;
    });

    setSelfInterview((prevState) => ({ ...prevState, questions: updateIsActive }));
  };

  return (
    <SelfInterviewPresenter
      dropAnswerRef={dropAnswerRef}
      isActive={isActive}
      setIsActive={setIsActive}
      selfInterview={selfInterview}
      handleListDropDown={handleListDropDown}
    />
  );
};

export default SelfInterviewContainer;
