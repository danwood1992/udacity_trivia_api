interface AnswerProps {
    answer: string;
}

export default function Answer({answer}: AnswerProps) {
    return (
        <div className="bg-green m-2 text-center p-6 rounded border shadow hover:opacity-1">
            <p>{answer}</p>
        </div>
    )
}

