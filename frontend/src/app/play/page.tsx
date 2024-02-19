'use client'
import React, { useState } from 'react';
import { Button } from '../../components/elements/Button';
import { getQuestions } from '@/queries/getQuestions';

export default function Page() {
  const [pageNumber, setPageNumber] = useState(1);
  const [questions, setQuestions] = useState([]);
  const questionsPerPage = 10;

  function set() {
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

  // Calculate the index of the first and last question on the current page
  const indexOfLastQuestion = pageNumber * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;

  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  return (
    <>
      <h1>UdaciTrivia - Play</h1>
      <p>Play the game</p>
      <div className='container'>
        <Button onClick={set} className='bg-olive'>Start</Button>
      </div>
      <p>Questions</p>
    
      <ul>
        {currentQuestions.map((question, index) => (
          <li key={index}>
            <p>{question.question}</p>
            {/* Combine all answers into a single array and shuffle them if needed */}
            <ul>
              {
                // Assuming you want to randomize the answers
                [question.answer, question.wrong_answer1, question.wrong_answer2, question.wrong_answer3]
                  .sort(() => 0.5 - Math.random()) // This is a simple shuffle. For more complex data, consider a more robust shuffle method.
                  .map((answer, answerIndex) => (
                    <li key={answerIndex}>{answer}</li>
                  ))
              }
            </ul>
          </li>
        ))}
      </ul>

      <div className='container'>
        <Button onClick={decrementPage} className='bg-slate-700'>Previous</Button>
        <Button onClick={incrementPage} className='bg-olive'>Next</Button>
      </div>
      <p>Page: {pageNumber}</p>
    </>
  );
}
