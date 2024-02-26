from flask import jsonify, request
from utils import seed_database
from models import Question, Quiz, QuizSession
from base import app, db
from datetime import datetime

@app.route('/session/<uuid:session_id>/submitanswer', methods=['GET'])
def submit_answer(session_id):
    print("submit quiz session endpoint")
    session = QuizSession.query.get(session_id)
    if session is None:
        return jsonify({
            'success': False,
            'message': 'Session not found'
        })
    return jsonify({
        'message': 'hello from submit quiz session',
        'session_id': session_id,
        'quiz_id': session.quiz_id
        
    })