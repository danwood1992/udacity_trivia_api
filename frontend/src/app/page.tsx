import PlaySection from "@/sections/PlaySection";
import getQuestions from "@/queries/getQuestions";

export default function Page() {
  const quizData = getQuestions();
  
  return (
    <>
      <PlaySection section_id="play-section-1" quizData={quizData} />
    </>
  );
}


