import { Section } from '@/components/layout/Structures';
import QuestionsBlock from '@/components/blocks/QuestionsBlock';

interface NewPlaySectionProps {
    section_id: string;
    quizData: any;
}

export default function PlaySection({quizData, section_id}:NewPlaySectionProps) { 
  const questionData = quizData;
  console.log('server side rendering')

  return (
      <Section id={section_id}>
        <QuestionsBlock questionData={questionData}/>
      </Section>
    )         
};



