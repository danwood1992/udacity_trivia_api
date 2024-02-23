interface NoOfQuestionsProps {
    no_questions: string;
}

export default function NoOfQuestions({no_questions}: NoOfQuestionsProps) {
    return (
            <div>No of Questions{no_questions}</div>
    )
}