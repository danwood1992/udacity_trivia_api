interface AnswerProps {
    answer: string;
    clicked: boolean;
}



export default function Answer({ answer, clicked }: AnswerProps) {
    // Conditionally set the classes based on `clicked`
    const containerClasses = `m-2 text-center text-3xl p-6 mx-8 rounded border hover:shadow hover:opacity-100 font-bold capitalize ${
        clicked ? 'bg-dark-blue text-white shadow' : 'bg-white text-dark-blue shadow-2xl '
    }`;

    return (
        <div className={containerClasses}>
            {answer}
        </div>
    );
}


