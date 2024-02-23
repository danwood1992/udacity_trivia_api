import getQuizData from "@/queries/getQuizData";
import QuizLinkSection from "@/sections/QuizLinkSection";


export default function Page() {
  const quizData = getQuizData();
  
  return (
    <>
      <QuizLinkSection section_id="play-section-1" quizData={quizData} />
    </>
  );
}


