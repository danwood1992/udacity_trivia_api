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
            <Container className='justify-center border rounded-xl p-4 bg-dark-blue text-white shadow-xl mt-4'>
              <p className='text-center text-2xl m-4'>Why did ryan cross the road?</p>
              <p className='text-center text-2xl m-4'>To get to the other side!</p>
            </Container>
      </Section>
    )
  }
  return (
      <Section id={section_id} >
            <Container className='justify-center border rounded-xl p-4 bg-dark-blue shadow-xl mt-4'>
              <textarea className='border border-dark-blue rounded-lg  text-center text-xl m-4' placeholder='Tell Us What You Think for a funny Joke!' />
              <button onClick={handleFeedback} className='bg-dark-blue  rounded-lg p-2 m-4'>Submit</button>
            </Container>
      </Section>

    )         
};