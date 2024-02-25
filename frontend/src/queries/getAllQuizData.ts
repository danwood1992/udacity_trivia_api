export default async function getAllQuizData() {
    const response = await fetch('http://trivia-api:5125/quizzes', { next: { revalidate: 60 } })
    
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return response.json()
  }