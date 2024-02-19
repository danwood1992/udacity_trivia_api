'use client'
import React, { useState } from 'react';
import { Button } from '../../components/elements/Button';
import { getQuestions } from '@/queries/getQuestions';
import QuestionBlock from '@/components/blocks/QuestionBlock';

export default function Page() {
  const [pageNumber, setPageNumber] = useState(1);
  const [questions, setQuestions] = useState([]);
  const questionsPerPage = 3;
  const indexOfLastQuestion = pageNumber * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  function start() {
    getQuestions().then((data) => {
      setQuestions(data.questions);
      console.log(data);
    });
  }
  
  function incrementPage() { 
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  }

  function decrementPage() {
    setPageNumber(prevPageNumber => prevPageNumber - 1);
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">UdaciTrivia - Play</h1>
        <p className="text-lg text-center mb-6">Play the game</p>

        <div className="flex justify-center mb-8">
          <Button onClick={start} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Start</Button>
        </div>

        <QuestionBlock currentQuestions={currentQuestions} />

        <div className="flex justify-between items-center mt-8">
          <Button onClick={decrementPage} className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">Previous</Button>
          <p className="text-lg">Page: {pageNumber}</p>
          <Button onClick={incrementPage} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Next</Button>
        </div>
      </div>
    </>

  );
}
