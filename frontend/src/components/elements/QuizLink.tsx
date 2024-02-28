import Link from "next/link";
interface QuizLinkProps {
    link: string;
    name: string;
    time: string;
}

export default function QuizLink({link,name,time}: QuizLinkProps) {
    return (
        <div className=" m-2 text-center text-white p-6 rounded-xl border-4 bg-dark-blue border-dark-blue shadow-xl hover:bg-white  hover:text-dark-blue ">
            <Link href={link} replace>
                <div className="text-xl capitalize  p-2 ">{name}</div>
                <div>{time} Mins</div>
            </Link>
        </div>
    )
}

