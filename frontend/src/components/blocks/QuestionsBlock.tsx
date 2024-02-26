import React, { useEffect, useState } from 'react';
import { Container } from '@/components/layout/Structures';
import Answer from '@/components/elements/Answer';
import { BlockHeading } from '../elements/Headings';

interface Option {
  text: string;
  is_clicked: boolean;
}

interface Question {
  question: string;
  options: Option[];
}

interface QuestionsBlockProps {
  currentQuestion: Question;
}

export default function QuestionBlock({ currentQuestion }: QuestionsBlockProps) {

  const option = currentQuestion.options;
  
  return (
    <>
      <Container className='justify-center p-12 '>
        <BlockHeading className="capitalize text-4xl text-dark-blue font-bold p-8" text={currentQuestion.question}></BlockHeading>
      </Container>
      <Container className='grid grid-cols-1 md:grid-cols-2 gap-2 p-12 border border-dark-blue rounded-2xl shadow-xl m-8'>
        <Answer answer={option[0].text}/>
        <Answer answer={option[1].text}/>
        <Answer answer={option[2].text}/>
        <Answer answer={option[3].text}/>
      </Container>
    </>
  );
}


