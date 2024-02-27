import { useEffect, useState } from 'react';
import { Section, Container } from '@/components/layout/Structures';
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
  const [quizEnded, setQuizEnded] = useState(false);
  const [playerName, setPlayerName] = useState(''); 

  async function handleStartQuiz() {
    const response = await startQuizSession(quizData.quiz.id);
    setSessionId(response.session_id);
    setQuizStarted(true);
  }

  if (quizEnded) {
    return (
      <Section id={section_id}>
        <Container className="flex flex-col justify-center items-center min-h-screen ">
          <h1>Quiz Ended</h1>
          <h2>Your Score: {quizScore}</h2>
        </Container>
      </Section>
    );
  }

  if (!quizStarted) {
    return (
      <Section id={section_id}>
        <Container className="flex flex-col justify-center items-center min-h-screen ">
          <div>Enter Name:
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
          </div>
          <Container onClick={handleStartQuiz} className="mt-4 p-2 bg-dark-blue text-white rounded rounded-lg cursor-pointer text-center text-2xl transform -translate-y-1/4">
            Start
          </Container>
        </Container>
      </Section>
    );
  }

  if (quizStarted) {  
    return (
      <Section id={section_id}>
        <QuestionsBlock
          quizData={quizData}
          session_id={session_id}
          updateQuizScore={setQuizScore}
          quizScore={quizScore}
          setQuizEnded={setQuizEnded}
        />
        <Container className='text-sm'>
        Quiz Score: {quizScore}
        </Container>
        <Container className='text-sm'>
        Session ID: {playerName} {session_id}
      </Container>
      </Section>
      
    );
  }
}




