import { Section, Container } from '@/components/layout/Structures';
import React, { useState } from 'react';
import submitFeedback from '@/mutations/submitFeedback';

interface FeedbackSectionProps {
    section_id: string;
    quizData: any;
}

export default function FeedbackSection({quizData, section_id}:FeedbackSectionProps) { 
  console.log('Information: quizData:', quizData)

  const [funnyjoke, setfunnyjoke] = useState(false)

  function handleFeedback() {
    console.log('Information: quizData.quiz.quiz_id:', quizData.quiz.id)
    submitFeedback(quizData.quiz.id, 'I think this is a great quiz!')
    setfunnyjoke(true)
  }

  if (funnyjoke) {
    return (
      <Section id={section_id} >
            <Container className='grid grid-cols-1 justify-center border rounded-xl p-4 bg-white text-dark-blue mt-4'>
              <p className='text-center text-xl m-2'>Why did ryan cross the road?</p>
              <p className='text-center text-xl m-2'>To get to the other side!</p>
            </Container>
      </Section>
    )
  }
  return (
      <Section id={section_id} >
            <Container className='justify-center rounded-xl p-4 bg-dark-blue grid grid-cols-1 mt-4'>
              <textarea className='text-center rounded-xl border-red-500 border-4 text-dark-blue text-xl m-4' placeholder='Tell Us What You Think for a funny Joke!' />
              <button onClick={handleFeedback} className='bg-dark-blue  rounded-lg p-2 m-4'>Submit</button>
            </Container>
      </Section>

    )         
};