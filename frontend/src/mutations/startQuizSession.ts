import { getApiUrl } from "@/utils/NetworkUtils";

const api_url = getApiUrl();

export default async function startQuizSession(quizId: string) {
  const response = await fetch(`${api_url}/api/session/${quizId}/start`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'

    },
    body: JSON.stringify({ quizId })
  });
  const data = await response.json();
  return data;
}