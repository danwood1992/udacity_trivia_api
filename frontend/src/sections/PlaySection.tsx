import { useState, useEffect } from 'react';
import {  Section, Container } from '@/components/layout/Structures';
import { SectionHeading } from '@/components/elements/Headings';
import QuestionsBlock from '@/components/blocks/QuestionsBlock';
import startQuizSession from '@/mutations/getAllQuizData';

interface NewPlaySectionProps {
    section_id: string;
    quizData: any;
}

async function startQuiz(quizId: string) {
  const response = startQuizSession(quizId);
  console.log(response);
  return response;
}

export default function PlaySection({ quizData, section_id }: NewPlaySectionProps) {
  const [session_id, setSessionId] = useState('');

   useEffect(() => {
    (async () => {
      const response = await startQuiz(quizData.quiz.id);
      
      setSessionId(response.session_id); 
    })();
  }, [quizData.quiz.id]); // Added quizData.quiz.id as a dependency


  return (
    <Section id={section_id}>
      <SectionHeading className="flex justify-center capitalize text-lg underline" text={quizData.quiz.name}/>
   
      <QuestionsBlock
        quizData={quizData}
        session_id={session_id}
      />

      <Container className='text-sm'>
        Session ID: {session_id}
      </Container>
    </Section>
   

   
  );
}



