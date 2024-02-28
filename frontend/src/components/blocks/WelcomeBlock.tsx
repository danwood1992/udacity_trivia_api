import { Container} from '@/components/layout/Structures';
import { BlockHeading } from '../elements/Headings';
import Link from 'next/link'
import Image from 'next/image'

interface WelcomeBlockProps {
  quizData: any;
}

export default function WelcomeBlock({quizData}:WelcomeBlockProps) {
  console.log('WelcomeBlock: quizData:', quizData)
  return(
    <>
    <Container className='grid grid-cols-1 justify-items-center p-4 bg-dark-blue text-white '>
      <div></div>
      <BlockHeading text='UdaciTrivia' className='text-7xl p-4' />
      <div></div>
   
    </Container>
     <Container className='grid grid-cols-1 justify-items-center bg-dark-blue text-white '>
      <Link href="/" aria-label="Home" className='rotating p-4'>
        <Image src="/images/science.svg" width={95} height={95} alt="rotating" />  
      </Link>
     <div className='text-md p-2 m-2'>By: <a className=' text-white underline' href="https://github.com/danwood1992">Dan Wood</a></div>
   </Container>
   </>
  )
}
