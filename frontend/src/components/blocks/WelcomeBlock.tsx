import { Container} from '@/components/layout/Structures';
import { BlockHeading } from '../elements/Headings';

interface WelcomeBlockProps {
  quizData: any;
}

export default function WelcomeBlock({quizData}:WelcomeBlockProps) {
  console.log('WelcomeBlock: quizData:', quizData)
  return(
    <Container className='grid justify-items-center p-6'>

      <BlockHeading text='Welcome to UdaciTrivia' className='text-5xl p-2' />
      <div> A Project for the Udacity Full Stack Nano Degree</div>   
      <div className='text-sm'>By: <a className='text-sm text-pale-sky' href="https://github.com/danwood1992">Dan Wood</a></div>
    </Container>
  )
}
