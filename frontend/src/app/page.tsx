import { PageWrapper } from "@/components/layout/Structures";
import QuizLinkSection from "@/sections/QuizLinkSection";
import InformationSection from "@/sections/InformationSection";
import IndexHeadingSection from "@/sections/IndexHeadingSection";
import getQuizData from "@/queries/getQuizData";

export default async function Page() {
  const quizData = await getQuizData();
  console.log('Page: quizData:', quizData)
  return (
    <PageWrapper>
      <IndexHeadingSection section_id="index-heading-section" quizData={quizData} />
      <QuizLinkSection section_id="play-section-1" quizData={quizData} />
      <InformationSection section_id="information-section" quizData={quizData} />
    </PageWrapper>
  );
}
