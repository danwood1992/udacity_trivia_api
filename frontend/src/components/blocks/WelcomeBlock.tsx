import { Container} from '@/components/layout/Structures';
import ActiveQuizzes from '../elements/ActiveQuizzes';
import NoOfQuestions from '../elements/NoOfQuestions';

interface WelcomeBlockProps {
  quizData: any;
}

export default function WelcomeBlock({quizData}:WelcomeBlockProps) {
  console.log('WelcomeBlock: quizData:', quizData)
  return(
    <Container className='grid justify-items-center border-b p-6'>
      <h1 className='text-xl underline mb-2'>Welcome to Udacitrivia</h1>    
      <ActiveQuizzes no_quizzes={quizData.no_quizzes} />
      <NoOfQuestions no_questions={quizData.no_questions} />


    </Container>
  )
}
