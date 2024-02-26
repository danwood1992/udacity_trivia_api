from flask import jsonify
from models import Question, Quiz, QuizSession
from base import app
from datetime import datetime

@app.route('/quiz/<uuid:quiz_id>/play', methods=['GET'])
def play_quiz(quiz_id):
    quiz = Quiz.query.get(quiz_id)
    print("play quiz endpoint, getting quiz: ", quiz.name)
    if quiz is None:
        return jsonify({
            'success': False,
            'message': 'Quiz not found'
        })
    else:
        return jsonify({
            'success': True,
            'message': 'Quiz found',
            'quiz': quiz.format()
        })


    

@app.route('/quizzes', methods=['GET'])
def get_quizzes():
    quizzes = Quiz.query.all()
    print("quizzes endpoint")
    
    return jsonify({
        'message': 'hello from quizzes update new cache',
        'no_quizzes': len(quizzes),
        'no_questions': len(Question.query.all()),
        'success': True,
        'quizzes': [quiz.format() for quiz in quizzes]
    })