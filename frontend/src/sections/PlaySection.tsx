import { useState } from 'react';
import { Section, Container } from '@/components/layout/Structures';
import submitQuiz from '@/mutations/submitQuiz';
import submitFeedback from '@/mutations/submitFeedback';
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
  const [feedback, setFeedback] = useState('');

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

  async function handleSubmitFeedback() {
    const response = await submitFeedback(session_id,quizData.quiz.id, feedback);
    console.log(response);
  }

  if (quizEnded) {
    submitQuiz(session_id, quizData.quiz.id, quizScore);

    return (
      <Section id={section_id}>
        <Container className="flex flex-col justify-center items-center min-h-screen ">
          <h1>Quiz Ended</h1>
          <h2>Your Score: {quizScore}</h2>
          <button onClick={restartQuiz}>Play again</button>

          <Container className='text-md border border-green rounded-xl shadow shadow-xl grid grid-cols-1 justify-items-center p-4 m-4 capitalize'>
          <div className='p-4'>
            What Did you <span className='font-bold'>love or hate </span>about {quizData.quiz.name}!
          </div>
          <div className='grid grid-cols-1 m-4'>
              <textarea className='border rounded-lg p-2' value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
              <button className='p-2 m-2 rounded bg-dark-blue text-white' onClick={handleSubmitFeedback}>Submit</button>
          </div>
    
            </Container>


        </Container>
      </Section>
    );
  }

  if (!quizStarted) {
    return (
      <Section id={section_id}>
        <Container className="flex flex-col justify-center items-center min-h-screen ">
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
      <Section id={section_id}>
        <ProgressBar duration={25} />
        <Timer duration={25} setQuizEnded={setQuizEnded}/>
        <QuestionsBlock
          quizData={quizData}
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




