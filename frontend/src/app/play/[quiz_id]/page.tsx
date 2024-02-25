'use client'
import PlaySection from "@/sections/PlaySection";
import getQuizData from "@/queries/getQuizData";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from 'react';

export default function Page() {
  let { quiz_id }:any = useParams();
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const data = await getQuizData({ quiz_id });
        setQuizData(data);
      } catch (error) {
        console.error("Failed to fetch quiz data:", error);
      }
    };

    fetchQuizData();
  }, [quiz_id]);

  if (quizData === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PlaySection section_id="play-section-1" quizData={quizData} />
    </>
  );
}
