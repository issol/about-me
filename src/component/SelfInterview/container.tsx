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
      { id: 1, question: '언제부터 지금의 직무에 관심을 갖게 되었나요 ?', isActive: false },
      { id: 2, question: '일에 있어 가장 중요하게 생각하는 것이 있다면 ?', isActive: false },
      { id: 3, question: '어떤 회사를 찾고 있나요 ?', isActive: false },
    ],
    answers: [
      {
        id: 1,
        answer:
          '고등학교 2학년, 호기심에 나가게된 SK Planet 주최 특성화고 App경진대회에서 처음으로 팀을 이뤄 어플리케이션을 기획하고, 개발하고, 배포까지 해본 경험이 가장 컸던 것 같습니다. 그전까진 진학을 위한 컴퓨터 공부였다면 이 경험을 기점으로 사람들이 많이 사용하는 서비스를 만들기 위한 공부로 바뀌었습니다. ',
      },
      {
        id: 2,
        answer:
          '특정 기능을 만드는 코드를 짜는 것은 누구나 할 수 있다고 생각합니다. 그래서 이 기능을 왜 이런 방법을, 코드를 사용하여 만들었는지를 말할 수 있는 것이 중요하다고 생각합니다. 원할한 피드백을 위한 가장 기초적이지만 중요한 개발자의 덕목이라고 생각하며, 항상 개발하며 질문하는 개발자가 되려고 합니다. ',
      },
      {
        id: 3,
        answer:
          '자율적인 분위기에서 회사와 같이 제가 성장할 수 있는 환경이었으면 좋겠습니다. 좋은 팀원들과 함께 배워가며 일할 수 있으면 좋겠습니다.',
      },
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
