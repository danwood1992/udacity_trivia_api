import { Container} from '@/components/layout/Structures';
import QuizMetaItem from '../elements/QuizMetaItem';

interface QuizMetaBlockProps {
  quizData: any;
}

export default function QuizMetaBlock({quizData}:QuizMetaBlockProps) {

  return(
    <Container className='items-center border rounded-xl p-4 bg-slate-400 shadow-xl m-4'>
      <QuizMetaItem text={`Current Quizzes: ${quizData.no_quizzes}` }/>
      <QuizMetaItem text={`Current Questions: ${quizData.no_questions}`} />
    </Container>
  )
}