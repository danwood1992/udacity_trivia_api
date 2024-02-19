export default function QuestionBlock({ currentQuestions }: { currentQuestions: any[] }) {
    return (
        <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Questions Block</h2>
        <ul className="space-y-6">
          {currentQuestions.map((question: any, index: number) => (
            <li key={index} className="bg-white shadow-md rounded-lg p-6">
              <p className="text-lg font-semibold mb-3">{question.question}</p>
              <p className="font-medium mb-2">Answers:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                  [question.answer, question.wrong_answer1, question.wrong_answer2, question.wrong_answer3]
                  .sort(() => 0.5 - Math.random())
                  .map((answer, answerIndex) => (
                    <li key={answerIndex} className="bg-slate-200 hover:bg-slate-300 text-slate-900 p-4 rounded-md cursor-pointer transition duration-150 ease-in-out">
                      {answer}
                    </li>
                  ))
                }
              </ul>
            </li>
          ))}
        </ul>
      </div>      
    );
}
