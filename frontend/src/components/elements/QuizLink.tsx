import Link from "next/link";
interface QuizLinkProps {
    link: string;
    name: string;
    time: string;
}

export default function QuizLink({link,name,time}: QuizLinkProps) {
    return (
        <div className=" m-2 text-center p-2 rounded-xl border-double border-4 border-slate-500 shadow-xl hover:border-slate-200">
            <Link href={link} replace>
                <div className="text-xl capitalize underline p-2">{name}</div>
                <div>Time limit: {time} Mins</div>
            </Link>
        </div>
    )
}

