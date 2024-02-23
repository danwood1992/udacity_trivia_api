export default async function getQuizData() {
    
    const response = await fetch('http://trivia-api:5125/quizdata'); // api -> backend -> quizzes
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    // const quizdata = await response.json();

    const quizdata = {
        "quizzes": [
            {
                "id" : "uuid-uuid-uuid-uuid",
                "name": "Quiz 1",
                "link": "/quizzes/quiz-1",
                "time_limit": 60,
                "questions" : [
                    {
                        "id": "uuid-uuid-uuid-uuid",
                        "question": "What is the capital of France?",
                        "category": "General Knowledge",
                        "options": [
                            {
                                "text": "Paris",
                                "is_correct": true
                            },
                            {
                                "text": "London",
                                "is_correct": false
                            },
                            {
                                "text": "New York",
                                "is_correct": false
                            },
                            {
                                "text": "Brussels",
                                "is_correct": false
                            }
                        ]
                    },
                    {
                        "id": "uuid-uuid-uuid-uui2",
                        "question": "What is the capital of England?",
                        "category": "General Knowledge",
                        "options": [
                            {
                                "text": "London",
                                "is_correct": true
                            },
                            {
                                "text": "Paris",
                                "is_correct": false
                            },
                            {
                                "text": "New York",
                                "is_correct": false
                            },
                            {
                                "text": "Dublin",
                                "is_correct": false
                            }
                        ]
                    },
                    
                ]
                    
            },

        ],
        
    };
  
    return quizdata;
}