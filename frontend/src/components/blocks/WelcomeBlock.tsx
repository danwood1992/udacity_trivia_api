import { Container} from '@/components/layout/Structures';
import { BlockHeading } from '../elements/Headings';

interface WelcomeBlockProps {
  quizData: any;
}

export default function WelcomeBlock({quizData}:WelcomeBlockProps) {
  console.log('WelcomeBlock: quizData:', quizData)
  return(
    <Container className='grid justify-items-center'>

      <BlockHeading text='Welcome to the Quiz App' className='text-5xl p-3' />
      <div> A Project for the Udacity Full Stack Nano Degree</div>   
      <div className='text-sm'>By: <a className='text-sm text-pale-sky' href="github.com/danwood1992">Dan Wood</a></div>
    </Container>
  )
}
