import { Container} from '@/components/layout/Structures';
import ActiveQuizzes from '../elements/ActiveQuizzes';
import NoOfQuestions from '../elements/NoOfQuestions';

interface WelcomeBlockProps {
  quizData: any;
}

export default function WelcomeBlock({quizData}:WelcomeBlockProps) {
  console.log('WelcomeBlock: quizData:', quizData)
  return(
    <Container className='grid justify-items-center'>
      <div className='text-xl underline mb-2'>Welcome To UdaciTrivia</div> 
      <div> A Project for the Udacity Full Stack Nano Degree</div>   
      <div className='text-sm'>By: <a className='text-sm text-pale-sky' href="github.com/danwood1992">Dan Wood</a></div>
 


    </Container>
  )
}
