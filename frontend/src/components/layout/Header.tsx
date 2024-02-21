'use client'
import Link from 'next/link'
import { ResponsiveContainer,FlexContainer } from './Structures'
import Image from 'next/image'

export function Header() {
  
  return (
    <header className="z-100 bg-pale-sky pb-6 pt-2 text-center">
      <ResponsiveContainer>
        <nav className="relative z-50 flex justify-between">
          <FlexContainer items='center' justify='center'>
            <Link href="/" aria-label="Home" className='rotating'>
              <Image src="/images/science.svg" width={45} height={45} alt="rotating" />  
            </Link>
          </FlexContainer>
          <p className="text-2xl font-bold mt-2"> UdaciTrivia</p>
        </nav>
      </ResponsiveContainer>
    </header>
  )
}
