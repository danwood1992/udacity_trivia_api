import { Container} from '@/components/layout/Structures';
import Answer from '@/components/elements/Answer';
import { BlockHeading } from '../elements/Headings';
interface QuestionsBlockProps {
  currentQuestion: any;
}

export default function QuestionBlock({currentQuestion}:QuestionsBlockProps) {
  console.log("QuestionBlock",currentQuestion);
  return(
    <div>
    
      <Container className='justify-center p-12 ' >
          <BlockHeading className="capitalize text-4xl text-dark-blue font-bold p-8" text={currentQuestion.question}></BlockHeading>
      </Container>
      <Container className='grid grid-cols-1 md:grid-cols-2 gap-2 p-12 border border-dark-blue rounded-2xl shadow-xl m-8'>
          <Answer answer={currentQuestion.options[0].text} clicked={true} />
          <Answer answer={currentQuestion.options[1].text} />
          <Answer answer={currentQuestion.options[2].text} />
          <Answer answer={currentQuestion.options[3].text} />
      </Container>
   
    </div>
    )
}
