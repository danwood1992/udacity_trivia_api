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
  setQuizEnded: any
}

async function submitAnswerMutation(session_id: string,question_id: string, score: number) {
  const response = submitAnswer(session_id, question_id, score);
  return response;
}

export default function QuestionBlock({ quizData, session_id, updateQuizScore,quizScore,setQuizEnded }: QuestionsBlockProps) {
  const qData = quizData.quiz.questions;
  const [answersClicked, setAnswersClicked] = useState([false, false, false, false]);
  const [currentQIndex, setcurrentQIndex] = useState(0);
  const [answerScore, setAnswerScore] = useState(0);
  const currentQ = qData[currentQIndex];
  const [quizLength, setQuizLength] = useState(qData.length);
  console.log('Quiz Length:', quizLength);
  console.log('Current Question Index:', currentQIndex);


  function handleAnswerSubmit() {
    const nextQIndex = getNextQuestionIndex(currentQIndex, qData);
    setcurrentQIndex(nextQIndex);
    setAnswersClicked([false, false, false, false]);
    submitAnswerMutation(session_id, currentQ.id, answerScore);
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
    <>
      <Container className='justify-center p-12 '>
        <BlockHeading className="capitalize text-4xl text-dark-blue font-bold p-8" text={currentQ.question}></BlockHeading>

      </Container>

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
