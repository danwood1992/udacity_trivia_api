import { Container} from '@/components/layout/Structures';
import Answer from '@/components/elements/Answer';
import { BlockHeading } from '../elements/Headings';
import React, { useState } from 'react';

interface QuestionsBlockProps {
  currentQuestion: any;
}

export default function QuestionBlock({currentQuestion}:QuestionsBlockProps) {
  const [clickedIndex, setClickedIndex] = useState(null);
  const handleAnswerClick = (index) => {
    setClickedIndex(index); 
  };

  return (
    <>
    <Container className='justify-center p-12 ' >
      <BlockHeading className="capitalize text-4xl text-dark-blue font-bold p-8" text={currentQuestion.question}></BlockHeading>
    </Container>
    <Container className='grid grid-cols-1 md:grid-cols-2 gap-2 p-12 border border-dark-blue rounded-2xl shadow-xl m-8'>
      {/* Render Answer components */}
      {currentQuestion.options.map((option, index) => (
        <Answer 
          key={index}
          answer={option.text} 
          clicked={clickedIndex === index}
          correct={option.is_correct}
          onClick={() => handleAnswerClick(index)}
        />
      ))}
    </Container>
    </>
    
  );
}
