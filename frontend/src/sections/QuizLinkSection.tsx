import { Section } from '@/components/layout/Structures';
import QuizLinkBlock from '@/components/blocks/QuizLinkBlock';

interface QuizLinkSectionProps {
    section_id: string;
    quizData: any;
}

export default function QuizLinkSection({quizData, section_id}:QuizLinkSectionProps) { 
  console.log('QuizLinkSection: quizData:', quizData)

  return (
      <Section id={section_id} >
        <div className='text-center text-xl p-4 '>Click On A Quiz To Play</div>
            <QuizLinkBlock quizData={quizData} />
      </Section>
    )         
};