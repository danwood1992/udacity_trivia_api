export default async function startQuizSession(quizId: string) {
  const response = await fetch(`http://localhost:5125/api/session/${quizId}/start`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ quizId })
  });
  const data = await response.json();
  return data;
}