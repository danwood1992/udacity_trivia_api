import React, { useState } from 'react';
import { Container } from '@/components/layout/Structures';
import Answer from '@/components/elements/Answer';
import { BlockHeading } from '../elements/Headings';
import { getNextQuestionIndex } from '@/utils/PlayUtils';

interface QuestionsBlockProps {
  quizData: any;
  updateQuizScore: any;
  quizScore: number;
  setQuizEnded: any
}


export default function QuestionBlock({ quizData, updateQuizScore,quizScore,setQuizEnded }: QuestionsBlockProps) {
  const qData = quizData.quiz.questions;
  const [answersClicked, setAnswersClicked] = useState([false, false, false, false]);
  const [currentQIndex, setcurrentQIndex] = useState(0);
  const [answerScore, setAnswerScore] = useState(0);
  const currentQ = qData[currentQIndex];
  const [quizLength, setQuizLength] = useState(qData.length);

  function handleAnswerSubmit() {
    const nextQIndex = getNextQuestionIndex(currentQIndex, qData);
    setcurrentQIndex(nextQIndex);
    setAnswersClicked([false, false, false, false]);
    updateQuizScore(answerScore + quizScore);
    setAnswerScore(0);
  
    if (currentQIndex === quizLength - 1) {
      setQuizEnded(true);
    }
    
  }

  function handleAnswerClick(optionIndex: number, score: number) {
    const updatedAnswers = answersClicked.map((_, index) => index === optionIndex);
    setAnswersClicked(updatedAnswers);
    setAnswerScore(score);
  }

  return (
    <div className="rounded-xl m-2">
      <Container className='justify-center p-12'>
        <BlockHeading className="capitalize text-2xl md:text-4xl text-white font-bold p-4" text={currentQ.question}></BlockHeading>
      </Container>
      <Container className='grid grid-cols-1 md:grid-cols-2 gap-2 p-12m-8 p-2'>
        <Answer answer={currentQ.options[0].text} clicked={answersClicked[0]} onClick={() => handleAnswerClick(0,currentQ.options[0].score)}/>
        <Answer answer={currentQ.options[1].text} clicked={answersClicked[1]} onClick={() => handleAnswerClick(1,currentQ.options[1].score)}/>
        <Answer answer={currentQ.options[2].text} clicked={answersClicked[2]} onClick={() => handleAnswerClick(2,currentQ.options[1].score)}/>
        <Answer answer={currentQ.options[3].text} clicked={answersClicked[3]} onClick={() => handleAnswerClick(3,currentQ.options[1].score)}/>
      </Container>
      <Container className='grid grid-cols-3 p-8 m-8 justify-items-center'>
        <h2 className='flex rounded-lg font-bold text-white p-4 text-xl'>Question: {currentQIndex + 1}</h2>
        <button className='flex rounded-lg font-bold text-dark-blue bg-white p-4 text-2xl hover:bg-red-500 hover:text-white'  onClick={handleAnswerSubmit}>Submit Answer</button>
        <h2 className='flex rounded-lg font-bold text-white p-4 text-xl'>Score: {quizScore}</h2>
      </Container>
    </div>
  );
}   
