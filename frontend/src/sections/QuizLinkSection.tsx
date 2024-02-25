import { Section } from '@/components/layout/Structures';
import { SectionHeading } from '@/components/elements/Headings';
import QuizLinkBlock from '@/components/blocks/QuizLinkBlock';
import QuizMetaBlock from '@/components/blocks/QuizMetaBlock';
import { Container } from '@/components/layout/Structures';

interface QuizLinkSectionProps {
    section_id: string;
    quizData: any;
}

export default function QuizLinkSection({quizData, section_id}:QuizLinkSectionProps) { 
  console.log('QuizLinkSection: quizData:', quizData)

  return (
      <Section id={section_id} className='border rounded-xl' >
        <SectionHeading text='Play a Quiz' className='text-4xl p-6 text-center' />
        <Container className='grid grid-cols-1 md:grid-cols-2 justify-items-center border rounded p-4  shadow-xl mt-4'>
          <QuizMetaBlock quizData={quizData} />
          <QuizLinkBlock quizData={quizData} />
        </Container>
      </Section>
    )         
};