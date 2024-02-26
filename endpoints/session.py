from flask import jsonify
from models import  QuizSession
from base import app
from datetime import datetime

@app.route('/session/<uuid:quiz_id>/start', methods=['POST'])
def start_quiz_session(quiz_id):
    print("start quiz session endpoint")

    new_session = QuizSession(quiz_id=quiz_id, score=0, date=datetime.now())
    new_session.add()
    
    if new_session.id is None:
        return jsonify({
            'success': False,
            'message': 'Failed to start session'
        })
    
    return jsonify({
        'message': 'hello from start quiz session',
        'session_id': new_session.id,
        'quiz_id': quiz_id
    })

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
    