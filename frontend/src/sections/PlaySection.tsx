import { useState } from 'react';
import {  Section } from '@/components/layout/Structures';
import { SectionHeading } from '@/components/elements/Headings';
import QuestionsBlock from '@/components/blocks/QuestionsBlock';

interface NewPlaySectionProps {
    section_id: string;
    quizData: any;
}

export default function PlaySection({ quizData, section_id }: NewPlaySectionProps) {
  const questionData = quizData.quiz.questions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
 
  return (
    <Section id={section_id}>
      <SectionHeading className="flex justify-center capitalize text-lg underline" text={quizData.quiz.name} />
      <QuestionsBlock
        quizData={quizData}
      />

      
 
    </Section>
  );
}



