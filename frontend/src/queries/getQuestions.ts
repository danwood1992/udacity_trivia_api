export default async function getQuestions() {
    
    const response = await fetch('http://localhost:5125/api/questions'); // api -> backend -> questions
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    const questions = await response.json();
  
    return questions;
}