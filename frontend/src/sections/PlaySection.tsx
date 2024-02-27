import { useState } from 'react';
import { Section, Container } from '@/components/layout/Structures';
import { SectionHeading } from '@/components/elements/Headings';
import QuestionsBlock from '@/components/blocks/QuestionsBlock';
import startQuizSession from '@/mutations/startQuizSession';

interface NewPlaySectionProps {
    section_id: string;
    quizData: any;
}

export default function PlaySection({ quizData, section_id }: NewPlaySectionProps) {
  const [session_id, setSessionId] = useState('');
  const [quizScore, setQuizScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  async function handleStartQuiz() {
    const response = await startQuizSession(quizData.quiz.id);
    setSessionId(response.session_id);
    setQuizStarted(true);
  }

  return (
    <Section id={section_id}>
      <SectionHeading className="flex justify-center capitalize text-lg underline" text={quizData.quiz.name}/>
      {!quizStarted && (
        <button onClick={handleStartQuiz} className="my-4 p-2 bg-blue-500 text-white rounded">
          Start Quiz
        </button>
      )}
      {quizStarted && (
        <QuestionsBlock
          quizData={quizData}
          session_id={session_id}
          updateQuizScore={setQuizScore}
          quizScore={quizScore}
        />
      )}
      <Container className='text-sm'>
        Session ID: {session_id}
      </Container>
      <Container className='text-sm'>
        Quiz Score: {quizScore}
      </Container>
    </Section>
  );
}




