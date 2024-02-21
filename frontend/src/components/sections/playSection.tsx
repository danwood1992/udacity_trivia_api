'use client'
import { Section, ResponsiveContainer, FlexContainer } from '@/components/layout/Structures';
import React, { useState } from 'react';
import { Button } from '../elements/Button';
import Timer from '@/components/blocks/Timer';
import { getQuestions } from '@/queries/getQuestions';
import QuestionBlock from '@/components/blocks/QuestionBlock';

export default function playSection() {
  const [pageNumber, setPageNumber] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [started, setStarted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // Store selected answers globally

  // Calculate score based on selectedAnswers
  const score = Object.values(selectedAnswers).filter(answer => answer.isCorrect).length;

  const questionsPerPage = 1;
  const duration = 60;

  const indexOfLastQuestion = pageNumber * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  // Update selected answers and score
  const updateSelectedAnswers = (questionIndex, answer, isCorrect) => {
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: { answer, isCorrect } }));
  };

  function start() {
    if (!started) {
      getQuestions().then((data) => {
        setQuestions(data.questions);
        setPageNumber(1);
        setSelectedAnswers({}); // Reset selected answers
      });
    }
    setStarted(true);
  }

  function stop() {
    setStarted(false);
    setPageNumber(1);
    setQuestions([]);
    setSelectedAnswers({}); // Reset selected answers
  }

  function incrementPage() { 
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  }

  function decrementPage() {
    if (pageNumber > 1) { // Prevent going below 1
      setPageNumber(prevPageNumber => prevPageNumber - 1);
    }
  }

  return (
    <Section>
      <FlexContainer items='center' justify='center'>
          <Timer duration={duration} start={started} stop={!started}/>
          <p className="text-lg">Score: {score}</p>
      </FlexContainer>
      
      <FlexContainer>
        <Button onClick={start} className={`bg-${started ? 'red' : 'green'}-500 hover:bg-${started ? 'red' : 'green'}-700 text-white font-bold py-2 px-4 rounded`}>Start</Button>
        {started && (
          <>
            <div className="mx-4"></div>
            <Button onClick={stop} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Stop</Button>
          </>
        )}
      </FlexContainer>

      {started && (
        <ResponsiveContainer>
          <FlexContainer>
            <QuestionBlock currentQuestions={currentQuestions} updateSelectedAnswers={updateSelectedAnswers} />
          </FlexContainer>

          <FlexContainer>
            <Button onClick={decrementPage}>Previous</Button>
            <p className="text-lg">Question: {pageNumber}</p>
            <Button onClick={incrementPage}>Next</Button>
          </FlexContainer>
        </ResponsiveContainer>
      )}
    </Section>
  );
}
