import React, { useState, useEffect } from 'react';
import { Container } from '@/components/layout/Structures';
import Answer from '@/components/elements/Answer';
import { BlockHeading } from '../elements/Headings';
import { getNextQuestionIndex } from '@/utils/PlayUtils';
import submitAnswer from '@/mutations/submitAnswer';

interface QuestionsBlockProps {
  quizData: any;
  session_id: any;
  updateQuizScore: any;
  quizScore: number;
}

async function submitAnswerMutation(session_id: string,question_id: string, score: number) {
  const response = submitAnswer(session_id);
  console.log('submitAnswerMutation', response);
  return response;
}

export default function QuestionBlock({ quizData, session_id, updateQuizScore,quizScore }: QuestionsBlockProps) {
  const qData = quizData.quiz.questions;
  const [answersClicked, setAnswersClicked] = useState([false, false, false, false]);
  const [currentQIndex, setcurrentQIndex] = useState(0);
  const [answerScore, setAnswerScore] = useState(0);
  const currentQ = qData[currentQIndex];
  const [timeLeft, setTimeLeft] = useState(20);
  const [progress, setProgress] = useState(100);

  
  useEffect(() => {
 
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId);
          handleAnswerSubmit(); 
          return 20; 
        }
        return prevTime - 1;
      });
    }, 1000);
    setProgress((timeLeft / 20) * 100);
    return () => clearInterval(timerId);
  }, [timeLeft, currentQIndex]); 

  function handleAnswerSubmit() {
    const nextQIndex = getNextQuestionIndex(currentQIndex, qData);
    setcurrentQIndex(nextQIndex);
    setAnswersClicked([false, false, false, false]);
    submitAnswerMutation(session_id, currentQ.id, answerScore);
    updateQuizScore(answerScore + quizScore);
  }

  function handleAnswerClick(optionIndex: number, score: number) {
    const updatedAnswers = answersClicked.map((_, index) => index === optionIndex);
    setAnswersClicked(updatedAnswers);
    setAnswerScore(score);
  }
  
  return (
    <>
      <Container className='justify-center p-12 '>
        <BlockHeading className="capitalize text-4xl text-dark-blue font-bold p-8" text={currentQ.question}></BlockHeading>
      </Container>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{ width: `${progress}%` }}></div>
      </div>
      <Container className='grid grid-cols-1 md:grid-cols-2 gap-2 p-12 border border-dark-blue rounded-2xl shadow-xl m-8'>
        <Answer answer={currentQ.options[0].text} clicked={answersClicked[0]} onClick={() => handleAnswerClick(0,currentQ.options[0].score)}/>
        <Answer answer={currentQ.options[1].text} clicked={answersClicked[1]} onClick={() => handleAnswerClick(1,currentQ.options[1].score)}/>
        <Answer answer={currentQ.options[2].text} clicked={answersClicked[2]} onClick={() => handleAnswerClick(2,currentQ.options[1].score)}/>
        <Answer answer={currentQ.options[3].text} clicked={answersClicked[3]} onClick={() => handleAnswerClick(3,currentQ.options[1].score)}/>
      </Container>
      <Container className='grid grid-cols-3 p-8 m-8 justify-items-center'>
        <h2 className='flex rounded-lg font-bold text-dark-blue p-4 text-xl'>Question: {currentQIndex + 1}</h2>
        <h2 className='flex rounded-lg font-bold text-dark-blue p-4 text-xl'>Score: {quizScore}</h2>
        <button className='flex rounded-lg font-bold text-white bg-dark-blue p-4 text-xl'  onClick={handleAnswerSubmit}>Submit</button>
      </Container>
    </>
  );
}   
