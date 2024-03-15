import WelcomeBlock from '@/components/blocks/WelcomeBlock';

interface IndexHeadingSectionProps {
    section_id: string;
    quizData: any;
}

export default function IndexHeadingSection({quizData, section_id}:IndexHeadingSectionProps) { 
  return (
      <div id={section_id} className='relative isolate bg-dark-blue md:px-6 md:py-6' >
            <WelcomeBlock quizData={quizData} />
      </div>
    )         
};