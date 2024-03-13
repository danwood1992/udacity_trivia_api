import { api_url } from "@/utils/NetworkUtils"

export default async function getAllQuizData() {
    console.log("api_url", api_url)
    const response = await fetch(`http://trivia-api:5125/api/quizzes`, { next: { revalidate: 60 } })
    
    if (!response.ok) {
      throw new Error('Failed to fetch data')
      
    }
   
    return response.json()
  }