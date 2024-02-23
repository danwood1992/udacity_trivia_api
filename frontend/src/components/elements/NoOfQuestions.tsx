interface NoOfQuestionsProps {
    no_quizzes: string;
}

export default function NoOfQuestions({no_quizzes}: NoOfQuestionsProps) {
    return (
        <div className="m-2 text-center p-2 rounded">
            <p>No of Questions{no_quizzes}</p>
        </div>
    )
}