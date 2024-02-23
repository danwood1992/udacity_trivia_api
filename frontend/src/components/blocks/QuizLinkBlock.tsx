import { Container} from '@/components/layout/Structures';
import QuizLink from '@/components/elements/QuizLink';

interface QuizLinksBlockProps {
  quizData: any;
}

export default function QuizLinkBlock({quizData}:QuizLinksBlockProps) {

  return(
    <Container className='grid grid-cols-1 md:grid-cols-2 gap-2' >       
        {quizData.quizzes.map((quiz: any) => (
            <QuizLink key={quiz.id} link={quiz.link} name={quiz.name} />
        ))}
    
    </Container>
  )
}