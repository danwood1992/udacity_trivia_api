import React, { useState } from 'react';
import { Container } from '@/components/layout/Structures';
import Answer from '@/components/elements/Answer';
import { BlockHeading } from '../elements/Headings';
import { getNextQuestionIndex } from '@/utils/PlayUtils';

interface Option {
  text: string;
  is_clicked: boolean;
}

interface Question {
  question: string;
  options: Option[];
}

interface QuestionsBlockProps {
  currentQuestion: Question;
}

export default function QuestionBlock({ quizData }: QuestionsBlockProps) {
  const [answersClicked, setAnswersClicked] = useState([false, false, false, false]);
  const questionData = quizData.quiz.questions;
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questionData[currentQuestionIndex];

  function handleAnswerSubmit() {
    const nextQuestionIndex = getNextQuestionIndex(currentQuestionIndex, questionData);
    setCurrentQuestionIndex(nextQuestionIndex);
    setAnswersClicked([false, false, false, false]);
  }

  function handleAnswerClick(optionIndex: number) {
    const updatedAnswers = answersClicked.map((item, index) => 
      index === optionIndex ? true : item,

    );
    setAnswersClicked(updatedAnswers);
  }

  return (
    <>
      <Container className='justify-center p-12 '>
        <BlockHeading className="capitalize text-4xl text-dark-blue font-bold p-8" text={currentQuestion.question}></BlockHeading>
      </Container>
      <Container className='grid grid-cols-1 md:grid-cols-2 gap-2 p-12 border border-dark-blue rounded-2xl shadow-xl m-8'>
        <Answer answer={currentQuestion.options[0].text} clicked={answersClicked[0]} onClick={() => handleAnswerClick(0)}/>
        <Answer answer={currentQuestion.options[1].text} clicked={answersClicked[1]} onClick={() => handleAnswerClick(1)}/>
        <Answer answer={currentQuestion.options[2].text} clicked={answersClicked[2]} onClick={() => handleAnswerClick(2)}/>
        <Answer answer={currentQuestion.options[3].text} clicked={answersClicked[3]} onClick={() => handleAnswerClick(3)}/>
      </Container>
      <Container className='grid grid-cols-2 p-8 m-8 justify-items-center'>
        <h2 className='flex rounded-lg font-bold text-dark-blue p-4 text-xl'>Score: 10</h2>
        <button className='flex rounded-lg font-bold text-white bg-dark-blue p-4 text-xl'  onClick={handleAnswerSubmit}> handleAnswerSubmit</button>
      </Container>
    </>
  );
}   
