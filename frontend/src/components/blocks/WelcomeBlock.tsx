import { Container} from '@/components/layout/Structures';
import ActiveQuizzes from '../elements/ActiveQuizzes';
import NoOfQuestions from '../elements/NoOfQuestions';

interface WelcomeBlockProps {
  quizData: any;
}

export default function WelcomeBlock({quizData}:WelcomeBlockProps) {
  console.log('WelcomeBlock: quizData:', quizData)
  return(
    <Container className='grid grid-cols-1 md:grid-cols-2 gap-2' >       
      <ActiveQuizzes no_quizzes={quizData.no_quizzes} />
      <NoOfQuestions no_quizzes={quizData.no_questions} />
    </Container>
  )
}
