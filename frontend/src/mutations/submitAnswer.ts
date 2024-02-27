export default async function submitAnswer(session_id: string, question_id: string, score: number) {
    const response = await fetch(`http://localhost:5125/session/${session_id}/submitanswer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ session_id, question_id, score})
    });
    const data = await response.json();
    return data;
  }