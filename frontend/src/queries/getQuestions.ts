import { getApiUrl } from "@/utils/NetworkUtils";

const api_url = getApiUrl();

export default async function getQuestions() {
    
    const response = await fetch(`${api_url}/api/questions`); // api -> backend -> questions
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    const questions = await response.json();
  
    return questions;
}