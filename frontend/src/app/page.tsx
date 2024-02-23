import QuizLinkSection from "@/sections/QuizLinkSection";

async function getQuizData() {
  const res = await fetch('http://trivia-api:5125/quizzes')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Page() {
  const quizData = await getQuizData();
  return (
    <>
      <QuizLinkSection section_id="play-section-1" quizData={quizData} />
    </>
  );
}



