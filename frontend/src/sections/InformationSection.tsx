import { Section, Container } from '@/components/layout/Structures';
import WelcomeBlock from '@/components/blocks/WelcomeBlock';
import ActiveQuizzes from '@/components/elements/ActiveQuizzes';
import NoOfQuestions from '@/components/elements/NoOfQuestions';

interface InformationSectionProps {
    section_id: string;
    quizData: any;
}

export default function InformationSection({quizData, section_id}:InformationSectionProps) { 
  console.log('Information: quizData:', quizData)

  return (
      <Section id={section_id} >
            <WelcomeBlock quizData={quizData} />
            {/* to be a block */}
            <Container className='grid grid-cols-2 justify-items-center border rounded p-8 bg-slate-400 shadow-xl'>
              <ActiveQuizzes no_quizzes={quizData.no_quizzes} />
              <NoOfQuestions no_questions={quizData.no_questions} />
            </Container>
          


      </Section>
    )         
};