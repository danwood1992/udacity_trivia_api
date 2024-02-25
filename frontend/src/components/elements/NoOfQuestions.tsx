interface NoOfQuestionsProps {
    no_questions: string;
}

export default function NoOfQuestions({no_questions}: NoOfQuestionsProps) {
    return (
            <div className="border rounded p-3 m-3 bg-white">Questions In Bank: {no_questions}</div>
    )
}