import React, { useState, useEffect } from 'react';

import './QuizView.css';

const questionsPerPlay = 5;

const QuizView = () => {
    <div>
        <h2>Quiz</h2>
        <p>Category: {quizCategory}</p>
        <p>Previous Questions: {previousQuestions}</p>
        <p>Number Correct: {numCorrect}</p>
        <p>Current Question: {currentQuestion}</p>
        <p>Guess: {guess}</p>
        <button onClick={selectCategory}>Select Category</button>
        <input type='text' name='guess' onChange={handleChange} />
        <button onClick={submitGuess}>Submit</button>
    </div>
};


export default QuizView;