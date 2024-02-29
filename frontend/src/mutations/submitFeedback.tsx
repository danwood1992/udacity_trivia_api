export default async function submitQuiz(session_id: string, quiz_id: string, feedback: string) {
    const response = await fetch(`http://localhost:5125/feedback/${quiz_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ session_id,quiz_id, feedback})
    });
    const data = await response.json();
    return data;
  }