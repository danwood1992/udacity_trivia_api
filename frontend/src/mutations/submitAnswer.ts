export default async function submitAnswer(session_id: string) {
    const response = await fetch(`http://localhost:5125/session/${session_id}/start`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ session_id })
    });
    const data = await response.json();
    return data;
  }