interface AnswerProps {
    answer: string;
}

export default function Answer({answer}: AnswerProps) {
    return (
        <div className="bg-green m-2 text-center text-2xl p-8 mx-8 rounded border shadow hover:opacity-1">
            <p>{answer}</p>
        </div>
    )
}

