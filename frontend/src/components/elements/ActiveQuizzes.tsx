interface ActiveQuizzesProps {
    no_quizzes: string;
}

export default function ActiveQuizzes({no_quizzes}: ActiveQuizzesProps) {
    return (
        <div className="m-2 text-center p-2 rounded">
            <p>No of quizzes{no_quizzes}</p>
        </div>
    )
}