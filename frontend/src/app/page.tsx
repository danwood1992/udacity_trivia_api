import QuizLinkSection from "@/sections/QuizLinkSection";
import InformationSection from "@/sections/InformationSection";
import getQuizData from "@/queries/getQuizData";

export default async function Page() {
  const quizData = await getQuizData();
  console.log('Page: quizData:', quizData)
  return (
    <>
      <QuizLinkSection section_id="play-section-1" quizData={quizData} />
      <InformationSection section_id="information-section" quizData={quizData} />
    </>
  );
}
