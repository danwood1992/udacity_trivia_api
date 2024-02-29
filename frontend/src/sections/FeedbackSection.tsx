import { Section, Container } from '@/components/layout/Structures';
import WelcomeBlock from '@/components/blocks/WelcomeBlock';
import ActiveQuizzes from '@/components/elements/QuizMetaItem';
import NoOfQuestions from '@/components/elements/NoOfQuestions';

interface InformationSectionProps {
    section_id: string;
    quizData: any;
}

export default function InformationSection({quizData, section_id}:InformationSectionProps) { 
  console.log('Information: quizData:', quizData)

  return (
      <Section id={section_id} >
            <Container className='grid grid-cols-2 justify-items-center border rounded p-4 bg-slate-400 shadow-xl mt-4'>
              <ActiveQuizzes no_quizzes={quizData.no_quizzes} />
              <NoOfQuestions no_questions={quizData.no_questions} />
            </Container>
      </Section>
    )         
};