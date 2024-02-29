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
      <Section id={section_id} className='border rounded-3xl border-dark-blue -my-10 z-10  bg-white '>
        <Container className='flex grid-cols-3 md:grid-cols-3 justify-items-center p-4 m-8'>
         <div></div>
          <QuizLinkBlock quizData={quizData} />
          <div></div>
        </Container>
      </Section>
    )         
};