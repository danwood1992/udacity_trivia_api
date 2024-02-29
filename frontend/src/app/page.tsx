import { PageWrapper } from "@/components/layout/Structures";
import QuizLinkSection from "@/sections/QuizLinkSection";
import IndexHeadingSection from "@/sections/IndexHeadingSection";
import getQuizData from "@/queries/getAllQuizData";

export default async function Page() {
  const quizData = await getQuizData();

  return (
    <PageWrapper>
      <IndexHeadingSection section_id="index-heading-section" quizData={quizData} />
      <QuizLinkSection section_id="play-section-1" quizData={quizData} />
      <IndexHeadingSection section_id="index-heading-section" quizData={quizData} />
    </PageWrapper>
  );
}
