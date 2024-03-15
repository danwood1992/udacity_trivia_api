import { Container} from '@/components/layout/Structures';
import { BlockHeading } from '../elements/Headings';
import Link from 'next/link'
import Image from 'next/image'

interface WelcomeBlockProps {
  quizData: any;
}

export default function WelcomeBlock({quizData}:WelcomeBlockProps) {
  return(
    <>
    <Container className='grid grid-cols-1 justify-items-center bg-dark-blue text-white p-2 m-2 '>
    
      <BlockHeading text='UdaciTrivia' className='text-2xl md:text-5xl' />
      <Link href="/" aria-label="Home" className='rotating '>
        <Image src="/images/science.svg" width={55} height={55} alt="rotating" className='p-2 ' />  
      </Link>
    </Container>


   </>
  )
}
