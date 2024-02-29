export default async function submitFeedback(quizId: string, feedback: any) {
    console.log('Information: quiz_id:', quizId)
    const response = await fetch(`http://localhost:5125/feedback/${quizId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ quizId, feedback})
    });
    const data = await response.json();
    return data;
  }