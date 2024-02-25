import { useState } from 'react';
import { Container, Section } from '@/components/layout/Structures';
import { SectionHeading } from '@/components/elements/Headings';
import QuestionsBlock from '@/components/blocks/QuestionsBlock';
import { getNextQuestionIndex } from '@/utils/PlayUtils';

interface NewPlaySectionProps {
    section_id: string;
    quizData: any;
}

export default function PlaySection({ quizData, section_id }: NewPlaySectionProps) {
  const questionData = quizData.quiz.questions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questionData[currentQuestionIndex];
  const [score, setScore] = useState(0);

  const updateScore = (is_correct:boolean,answered:boolean) => {

    if (is_correct) {
      setScore(score + 1);
    }
    
  }

  const NextQuestion = () => {
    setCurrentQuestionIndex(getNextQuestionIndex(currentQuestionIndex, questionData));
  }
   
  return (
    <Section id={section_id}>
      <SectionHeading className="flex justify-center capitalize text-lg underline" text={quizData.quiz.name} />
      <QuestionsBlock currentQuestion={currentQuestion} setAnswerClick={null}/>
      <Container className='grid grid-cols-2 p-8 m-8 justify-items-center'>
        <h2 className='flex rounded-lg font-bold text-dark-blue p-4 text-xl'>Score: {score}</h2>
        <button className="flex rounded-lg bg-dark-blue text-white border p-4 text-xl" onClick={NextQuestion}> Next Question</button>
      </Container>
 
    </Section>
  );
}



