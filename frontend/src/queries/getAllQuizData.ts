import { api_url } from "@/utils/NetworkUtils"

export default async function getAllQuizData() {
    const response = await fetch(`${api_url}/quizzes`, { next: { revalidate: 60 } })
    
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return response.json()
  }