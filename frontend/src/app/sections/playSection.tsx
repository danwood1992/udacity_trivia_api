'use client'
import React, { useState } from 'react';
import { Button } from '../../components/elements/Button';
import Timer from '@/components/blocks/Timer';
import { getQuestions } from '@/queries/getQuestions';
import QuestionBlock from '@/components/blocks/QuestionBlock';

export default function playSection() {
  const [pageNumber, setPageNumber] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [started, setStarted] = useState(false);
  
  const questionsPerPage = 1;
  const duration = 60;

  const indexOfLastQuestion = pageNumber * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  function start() {
    if (!started) {
      getQuestions().then((data) => {
        setQuestions(data.questions);
        setPageNumber(1);
      
      });
    }
    setStarted(true);
  }

  function stop() {
    setStarted(false);
    setPageNumber(1);
    setQuestions([]);
   
  }


  function incrementPage() { 
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  }

  function decrementPage() {
    setPageNumber(prevPageNumber => prevPageNumber - 1);
  }

  return (
    <>
        <Timer duration={duration} start={started} stop={!started}/>
        <p className="text-lg text-center mb-6">Play</p>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex justify-center mb-8">
            <Button onClick={start} className={`bg-${started ? 'red' : 'green'}-500 hover:bg-${started ? 'red' : 'green'}-700 text-white font-bold py-2 px-4 rounded`}>Start</Button>
            {started && (
              <>
                <div className="mx-4"></div>
                <Button onClick={stop} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Stop</Button>
              </>
            )}
          </div>
        </div>

        {started && (
          <div className="flex justify-center mb-8">
          
            
            <QuestionBlock currentQuestions={currentQuestions} />

            <div className="flex justify-between items-center mt-8">
              <Button onClick={decrementPage} className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">Previous</Button>
              <p className="text-lg">Question: {pageNumber}</p>
              <Button onClick={incrementPage} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Next</Button>
            </div>
          </div>
        )}
    </>
  );
}