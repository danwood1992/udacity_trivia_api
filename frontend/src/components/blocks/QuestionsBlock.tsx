import React, { useState } from 'react';
import { Container } from '@/components/layout/Structures';
import Answer from '@/components/elements/Answer';
import { BlockHeading } from '../elements/Headings';
import { getNextQuestionIndex } from '@/utils/PlayUtils';
import submitAnswer from '@/mutations/submitAnswer';

interface QuestionsBlockProps {
  quizData: any;
  session_id: any;
}

async function submitAnswerMutation(session_id: string,question_id: string, answer_clicked: string) {
  const response = submitAnswer(session_id);
  console.log('submitAnswerMutation', response);
  return response;
}

export default function QuestionBlock({ quizData, session_id }: QuestionsBlockProps) {
  const qData = quizData.quiz.questions;
  const [answersClicked, setAnswersClicked] = useState([false, false, false, false]);
  const [currentQIndex, setcurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const currentQ = qData[currentQIndex];


  function handleAnswerSubmit() {
    const nextQIndex = getNextQuestionIndex(currentQIndex, qData);
    setcurrentQIndex(nextQIndex);
    setAnswersClicked([false, false, false, false]);
    submitAnswerMutation(session_id, currentQ.id, 'answer_clicked');
  }

  function handleAnswerClick(optionIndex: number,score: number) {
    const updatedAnswers = answersClicked.map((item, index) => 
      index === optionIndex ? !item : item

    );
    setScore(0);
    setAnswersClicked(updatedAnswers);
    setScore(score);
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
      <Container className='grid grid-cols-2 p-8 m-8 justify-items-center'>
        <h2 className='flex rounded-lg font-bold text-dark-blue p-4 text-xl'>Score: 10</h2>
        <button className='flex rounded-lg font-bold text-white bg-dark-blue p-4 text-xl'  onClick={handleAnswerSubmit}> handleAnswerSubmit</button>
      </Container>
    </>
  );
}   
