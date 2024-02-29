from base import app
from models import Quiz
from flask import jsonify

@app.route('/quiz/<uuid:quiz_id>/feedback', methods=['GET'])
def play_quiz(quiz_id):
    quiz = Quiz.query.get(quiz_id)
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