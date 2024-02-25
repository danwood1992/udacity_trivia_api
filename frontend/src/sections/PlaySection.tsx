import { Section } from '@/components/layout/Structures';
import QuestionsBlock from '@/components/blocks/QuestionsBlock';

interface NewPlaySectionProps {
    section_id: string;
    quizData: any;
}

export default function PlaySection({quizData, section_id}:NewPlaySectionProps) { 
  const questionData = quizData.quiz.questions;
  console.log('PlaySection quizdata questions', quizData.quiz.questions);
  console.log('PlaySection quizID', quizData.quiz.id);



  return (
      <Section id={section_id}>
        <QuestionsBlock questionData={questionData}/>
        <h1>Quiz id = </h1>
      </Section>
    )         
};



