interface ActiveQuizzesProps {
    no_quizzes: string;
}

export default function ActiveQuizzes({no_quizzes}: ActiveQuizzesProps) {
    return (
  
            <div className="border rounded p-3 m-3 bg-white">No Of Quizzes: {no_quizzes}</div>
        
    )
}