interface QuizData {
    quiz_id: string;
  }

export default async function getQuizData({quiz_id}: QuizData) {
    const response = await fetch(`http://localhost:5125/api/quiz/${quiz_id}/play`, { next: { revalidate: 60 } })
    
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return response.json()
  }