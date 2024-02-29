import { Section, Container } from '@/components/layout/Structures';
import WelcomeBlock from '@/components/blocks/WelcomeBlock';

interface IndexHeadingSectionProps {
    section_id: string;
    quizData: any;
}

export default function IndexHeadingSection({quizData, section_id}:IndexHeadingSectionProps) { 
  return (
      <div id={section_id} className='relative isolate bg-dark-blue px-6 py-6 sm:py-6 lg:px-8' >
            <WelcomeBlock quizData={quizData} />
      </div>
    )         
};