import { Section } from '@/components/layout/Structures';
import QuestionsBlock from '@/components/blocks/QuestionsBlock';

interface QuizLinkSectionProps {
    section_id: string;
    quizData: any;
}

export default function QuizLinkSection({quizData, section_id}:QuizLinkSectionProps) { 
  const questionData = quizData;
  console.log('server side rendering')

  return (
      <Section id={section_id}>
        <QuestionsBlock questionData={questionData}/>
      </Section>
    )         
};