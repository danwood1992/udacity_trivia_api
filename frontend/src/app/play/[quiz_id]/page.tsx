import PlaySection from "@/sections/PlaySection";
import QuizLinkSection from "@/sections/QuizLinkSection";
import getQuizData from "@/queries/getQuizData";

export default async function Page() {
  const quizData = await getQuizData();
  console.log('Page: quizData:', quizData)
  return (
    <>
      <PlaySection section_id="play-section-1" quizData={quizData} />
      <QuizLinkSection section_id="play-section-1" quizData={quizData} />
    </>
  );
}
