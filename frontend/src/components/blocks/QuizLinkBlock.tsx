import { Container} from '@/components/layout/Structures';
import QuizLink from '@/components/elements/QuizLink';

interface QuizLinksBlockProps {
  quizlinks: any;
}

export default function QuizLinkBlock({quizlinks}:QuizLinksBlockProps) {

  return(
    <Container className='grid grid-cols-1 md:grid-cols-2 gap-2' >       
        {quizlinks.map((quizlink: any) => (
            <QuizLink key={quizlink.id} link={quizlinks.link} />
        ))}
    
    </Container>
  )
}