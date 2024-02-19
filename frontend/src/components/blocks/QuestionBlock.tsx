import React, { useState } from 'react';

export default function QuestionBlock({ currentQuestions }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerClick = (questionIndex, selectedAnswer, isCorrect) => {
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: { answer: selectedAnswer, isCorrect } }));
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Questions Block</h2>
      <ul className="space-y-6">
        {currentQuestions.map((question, questionIndex) => (
          <li key={questionIndex} className="bg-white shadow-md rounded-lg p-6">
            <p className="text-lg font-semibold mb-3">{question.question}</p>
            <p className="font-medium mb-2">Answers:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { answer: question.answer, isCorrect: true },
                { answer: question.wrong_answer1, isCorrect: false },
                { answer: question.wrong_answer2, isCorrect: false },
                { answer: question.wrong_answer3, isCorrect: false },
              ]
              .sort(() => 0.5 - Math.random())
              .map((item, answerIndex) => (
                <li key={answerIndex} 
                    className={`p-4 rounded-md cursor-pointer transition duration-150 ease-in-out ${
                      selectedAnswers[questionIndex]?.answer === item.answer
                      ? (item.isCorrect ? "bg-olive text-white" : "bg-red-500 text-white")
                      : "bg-slate-200 hover:bg-slate-300 text-slate-900"}`
                    }
                    onClick={() => handleAnswerClick(questionIndex, item.answer, item.isCorrect)}
                >
                  {item.answer}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

