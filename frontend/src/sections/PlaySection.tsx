import { useState } from 'react';
import { Section, Container } from '@/components/layout/Structures';
import submitQuiz from '@/mutations/submitQuiz';
import QuestionsBlock from '@/components/blocks/QuestionsBlock';
import startQuizSession from '@/mutations/startQuizSession';
import ProgressBar from '@/components/elements/ProgressBar';
import Timer from '@/components/elements/Timer';

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

  async function restartQuiz() {
    const response = await startQuizSession(quizData.quiz.id);
    setSessionId(response.session_id);
    setQuizStarted(true);
    setQuizEnded(false);
    setQuizScore(0);
  }

  if (quizEnded) {
    submitQuiz(session_id, quizData.quiz.id, quizScore);

    return (
      <Section id={section_id}>
        <Container className="flex flex-col justify-center items-center  min-h-[720px] text-white text-3xl">
          <h1>Quiz Ended</h1>
          <h2>Your Score: {quizScore}</h2>
          <button className='border border-white text-white rounded-full p-4 m-4 hover:bg-red-500 hover:border-red-500' onClick={restartQuiz}>Play again</button>
          </Container>
      </Section>
    );
  }

  if (!quizStarted) {
    return (
      <Section id={section_id}>
        <Container className="flex flex-col justify-center items-center min-h-[720px]">
          <div>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="p-2 border border-dark-blue rounded-lg w-48 text-center text-2xl transform -translate-y-1/4 m-4"
              placeholder="Enter Name"
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
      <Section id={section_id} className=' min-h-[720px]'>
        <ProgressBar duration={100} />
        <Timer duration={100} setQuizEnded={setQuizEnded}/>
        <QuestionsBlock
          quizData={quizData}
          updateQuizScore={setQuizScore}
          quizScore={quizScore}
          setQuizEnded={setQuizEnded}
        />
     
      </Section>
      
    );
  }
}




