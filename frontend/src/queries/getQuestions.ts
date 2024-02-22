export default async function getQuestions() {
    
    const response = await fetch('http://trivia-api:5125/questions'); // api -> backend -> questions
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    const questions = await response.json();
  
    return questions;
}