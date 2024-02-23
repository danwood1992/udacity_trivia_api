interface QuizLinkProps {
    link: string;
}

export default function QuizLink({link}: QuizLinkProps) {
    return (
        <div className="m-2 text-center p-2 rounded border shadow hover:opacity-1">
            <p>{link}</p>
        </div>
    )
}

