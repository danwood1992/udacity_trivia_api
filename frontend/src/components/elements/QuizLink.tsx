import Link from "next/link";
interface QuizLinkProps {
    link: string;
    name: string;
}

export default function QuizLink({link,name}: QuizLinkProps) {
    return (
        <div className="m-2 text-center p-2 rounded border shadow hover:opacity-1">
            <Link href={link}>
            <p>{name}</p>
            </Link>
        </div>
    )
}

