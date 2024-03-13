import { getApiUrl } from "@/utils/NetworkUtils";

interface QuizData {
    quiz_id: string;
  }

const api_url = getApiUrl();


export default async function getQuizData({quiz_id}: QuizData) {
   console.log("api_url", api_url);
    const response = await fetch(`${api_url}/api/quiz/${quiz_id}/play`, { next: { revalidate: 60 } })
    
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return response.json()
  }