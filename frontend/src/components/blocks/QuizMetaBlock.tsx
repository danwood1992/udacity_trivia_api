import { Container} from '@/components/layout/Structures';
import ActiveQuizzes from '@/components/elements/QuizMetaItem';
import NoOfQuestions from '@/components/elements/NoOfQuestions';

interface QuizMetaBlockProps {
  quizData: any;
}

export default function QuizMetaBlock({quizData}:QuizMetaBlockProps) {

  return(
    <Container className='items-center border rounded-xl p-4 bg-slate-400 shadow-xl m-4'>
      <ActiveQuizzes no_quizzes={quizData.no_quizzes} />
      <NoOfQuestions no_questions={quizData.no_questions} />
    </Container>
  )
}