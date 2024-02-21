import React, { useState, useCallback, memo } from 'react';

// Answer component for individual answers
const Answer = memo(({ answer, isSelected, isCorrect, onClick }) => {
  const className = `p-4 rounded-md cursor-pointer transition duration-150 ease-in-out ${
    isSelected
      ? isCorrect ? "bg-olive text-white" : "bg-red-500 text-white"
      : "bg-slate-200 hover:bg-slate-300 text-slate-900"
  }`;
  return (
    <li className={className} onClick={onClick}>
      {answer}
    </li>
  );
});

// Question component for each question block
const Question = ({ question, questionIndex, selectedAnswer, handleAnswerClick }) => (
  <li className="bg-white shadow-md rounded-lg p-6">
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
        <Answer
          key={answerIndex}
          answer={item.answer}
          isSelected={selectedAnswer?.answer === item.answer}
          isCorrect={item.isCorrect}
          onClick={() => handleAnswerClick(questionIndex, item.answer, item.isCorrect)}
        />
      ))}
    </ul>
  </li>
);

export default function QuestionBlock({ currentQuestions, updateSelectedAnswers }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  
  const handleAnswerClick = useCallback((questionIndex, selectedAnswer, isCorrect) => {
    setSelectedAnswers(prev => {
      const newAnswers = { ...prev, [questionIndex]: { answer: selectedAnswer, isCorrect } };
      // Update score based on the new answer
      const newScore = Object.values(newAnswers).filter(ans => ans.isCorrect).length;
      updateSelectedAnswers(newScore);
      return newAnswers;
    });
  }, [updateSelectedAnswers]);

  return (
    <div className="my-8">
      <ul className="space-y-6">
        {currentQuestions.map((question, questionIndex) => (
          <Question
            key={questionIndex}
            question={question}
            questionIndex={questionIndex}
            selectedAnswer={selectedAnswers[questionIndex]}
            handleAnswerClick={handleAnswerClick}
          />
        ))}
      </ul>
    </div>
  );
}

