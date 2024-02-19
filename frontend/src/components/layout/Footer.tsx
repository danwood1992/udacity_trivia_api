import Link from 'next/link'
import { Container } from '@/components/elements/Container'
import { NavLink } from '@/components/NavLink'
import Image from 'next/image'

export function Footer() {
  return (
    <footer>
      <Container>
          <p className="mt-6 text-sm text-woodcote-darker-sand sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} udacitrivia. All rights
            reserved.
          </p>
      </Container>
    </footer>
  )
}
