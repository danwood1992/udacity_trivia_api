import { Section } from '@/components/layout/Structures';
import QuizLinkBlock from '@/components/blocks/QuizLinkBlock';

interface QuizLinkSectionProps {
    section_id: string;
    quizData: any;
}

export default function QuizLinkSection({quizData, section_id}:QuizLinkSectionProps) { 
  console.log('server side rendering')

  return (
      <Section id={section_id}>
            <QuizLinkBlock quizlinks={quizData.link} />
            
      </Section>
    )         
};