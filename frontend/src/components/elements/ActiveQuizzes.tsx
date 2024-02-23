interface ActiveQuizzesProps {
    no_quizzes: string;
}

export default function ActiveQuizzes({no_quizzes}: ActiveQuizzesProps) {
    return (
  
            <div>No of quizzes: {no_quizzes}</div>
        
    )
}