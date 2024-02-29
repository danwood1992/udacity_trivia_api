import { Section, Container } from '@/components/layout/Structures';
import WelcomeBlock from '@/components/blocks/WelcomeBlock';

interface IndexFooterProps {
    section_id: string;
    quizData: any;
}

export default function IndexHeadingSection({quizData, section_id}:IndexFooterProps) { 
  console.log('e: quizData:', quizData)

  return (
      <Section id={section_id} >
            <WelcomeBlock quizData={quizData} />
      </Section>
    )         
};