import { useState } from 'react';
import { Section } from '@/components/layout/Structures';
import { SectionHeading } from '@/components/elements/Headings';
import QuestionsBlock from '@/components/blocks/QuestionsBlock';

interface NewPlaySectionProps {
    section_id: string;
    quizData: any;
}

export default function PlaySection({ quizData, section_id }: NewPlaySectionProps) {
  const questionData = quizData.quiz.questions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questionData[currentQuestionIndex];

  const NextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1 < questionData.length ? currentQuestionIndex + 1 : currentQuestionIndex;
    setCurrentQuestionIndex(nextQuestionIndex);
  };

  return (
    <Section id={section_id}>
      <SectionHeading text={quizData.quiz.name}></SectionHeading>
      <QuestionsBlock currentQuestion={currentQuestion}/>
      <button onClick={NextQuestion}>Next</button>
    </Section>
  );
}



