import { Container} from '@/components/layout/Structures';
import Answer from '@/components/elements/Answer';

interface QuestionsBlockProps {
  questionData: any;
}

export default function QuestionBlock({questionData}:QuestionsBlockProps) {

  return(
    <Container className='grid grid-cols-1 md:grid-cols-2 gap-2' >       
      <Answer answer="Answer 1"/>
      <Answer answer="Answer 2"/>
      <Answer answer="Answer 3"/>
      <Answer answer="Answer 4"/>   
    </Container>
  )
}
