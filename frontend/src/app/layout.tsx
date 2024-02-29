import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'
import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - woodcote',
    default: 'udacitrivia',
  },
  description:
    'Robust and reliable Trivia api with a wide range of categories and questions',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth antialiased bg-woodcote-whisper-white',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col bg-white">
          {children}
   
      </body>
    </html>
  )
}
