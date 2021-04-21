import React, { useEffect, useRef, useState } from 'react';
import SelfInterviewPresenter from './presenter';

const SelfInterviewContainer = () => {
  const dropAnswerRef = useRef(null);

  const questions = [
    '언제부터 지금의 직무에 관심을 갖게 되었나요 ?',
    '일에 있어가장 중요하게 생각하는 것이 있다면 ?',
    '학창시절의 경험 중 가장 멋진 경험을 들려주세요.',
  ];

  const answers = ['1dd', '2dd', '3dd'];
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    console.log(isActive);
  });
  return (
    <SelfInterviewPresenter
      dropAnswerRef={dropAnswerRef}
      isActive={isActive}
      setIsActive={setIsActive}
      questions={questions}
      answers={answers}
    />
  );
};

export default SelfInterviewContainer;
