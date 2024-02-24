'use client'
import Link from 'next/link'
import { Container } from './Structures'
import Image from 'next/image'

export function Header() {
  
  return (
    <header className="z-100 bg-pale-sky pb-6 pt-2 text-center">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <Container >
            <Link href="/" aria-label="Home" className='rotating'>
              <Image src="/images/science.svg" width={45} height={45} alt="rotating" />  
            </Link>
          </Container>
          <p className="text-2xl font-bold mt-2"> UdaciTrivia</p>
        </nav>
      </Container>
    </header>
  )
}
