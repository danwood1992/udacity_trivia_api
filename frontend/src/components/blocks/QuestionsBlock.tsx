import { Container} from '@/components/layout/Structures';
import Answer from '@/components/elements/Answer';
import { BlockHeading } from '../elements/Headings';
interface QuestionsBlockProps {
  currentQuestion: any;
}

export default function QuestionBlock({currentQuestion}:QuestionsBlockProps) {
  
  return(
    <>
      <Container>
          <BlockHeading text={currentQuestion.question}></BlockHeading>
      </Container>
      <Container className='grid grid-cols-1 md:grid-cols-2 gap-2 p-8'>
          <Answer answer={currentQuestion.options[0].text} />
          <Answer answer={currentQuestion.options[1].text} />
          <Answer answer={currentQuestion.options[2].text} />
          <Answer answer={currentQuestion.options[3].text} />
        </Container>
    </>
    )
}
