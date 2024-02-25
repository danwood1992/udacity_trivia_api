interface QuizMetaItemProps {
    text: string;
}

export default function QuizMetaItem({text}: QuizMetaItemProps) {
    return (
            <div className="border rounded p-3 m-3 bg-white">{text}</div>  
    )
}