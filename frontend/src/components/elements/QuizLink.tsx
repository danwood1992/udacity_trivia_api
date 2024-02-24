import Link from "next/link";
interface QuizLinkProps {
    link: string;
    name: string;
    time: string;
}

export default function QuizLink({link,name,time}: QuizLinkProps) {
    return (
        <div className=" m-2 text-center p-2 rounded border shadow hover:opacity-1">
            <Link href={link} replace>
                <div className="text-xl capitalize underline p-2">{name}</div>
                <div>Time limit: {time} Mins</div>
            </Link>
        </div>
    )
}

