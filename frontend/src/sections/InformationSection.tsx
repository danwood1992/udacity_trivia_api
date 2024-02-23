import { Section } from '@/components/layout/Structures';
import WelcomeBlock from '@/components/blocks/WelcomeBlock';

interface InformationSectionProps {
    section_id: string;
    quizData: any;
}

export default function InformationSection({quizData, section_id}:InformationSectionProps) { 
  console.log('Information: quizData:', quizData)

  return (
      <Section id={section_id} >
            <WelcomeBlock quizData={quizData} />


      </Section>
    )         
};