import { api_url } from '../utils/NetworkUtils'

interface QuizData {
    quiz_id: string;
  }

export default async function getQuizData({quiz_id}: QuizData) {
    const response = await fetch(`${api_url}/api/quiz/${quiz_id}/play`, { next: { revalidate: 60 } })
    
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return response.json()
  }