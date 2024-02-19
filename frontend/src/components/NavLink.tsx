import Link from 'next/link'

export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 text-woodcote-whisper-white  hover:bg-woodcote-whisper-white  hover:text-woodcote-darker-sand"
    >
      {children}
    </Link>
  )
}
