import { Container } from './Structures'

export function Footer() {
  return (
    <footer>
      <Container>
          <p className="mt-6 text-sm text-woodcote-darker-sand sm:mt-0 bottom-0">
            Copyright &copy; {new Date().getFullYear()} udacitrivia. All rights
            reserved.
          </p>
      </Container>
    </footer>
  )
}
