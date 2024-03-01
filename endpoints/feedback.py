from base import app
from models import Quiz
from flask import jsonify

@app.route('/api/feedback/<uuid:quizId>', methods=['POST'])
def submit_feedback(quizId):
    quiz = Quiz.query.get(quizId)
    
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