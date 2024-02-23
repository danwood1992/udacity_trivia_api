interface QuizLinkProps {
    link: string;
    name: string;
}

export default function QuizLink({link,name}: QuizLinkProps) {
    return (
        <div className="m-2 text-center p-2 rounded border shadow hover:opacity-1">
            <p>{link}</p>
            <p>{name}</p>
        </div>
    )
}

