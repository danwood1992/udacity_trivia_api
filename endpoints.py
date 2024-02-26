from flask import jsonify, request
from utils import seed_database
from models import Question, Quiz, QuizSession
from base import app, db
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

@app.route('/quiz/<uuid:quiz_id>/start', methods=['GET'])
def start_quiz_session(quiz_id):
    print("start quiz session endpoint")

    new_session = QuizSession(quiz_id=quiz_id, score=0, date=datetime.now())
    new_session.add()
    
    return jsonify({
        'message': 'hello from start quiz session',
        'session_id': new_session.id,
        'quiz_id': quiz_id
    })

@app.route('/quiz/<uuid:session_id>/submitanswer', methods=['POST'])
def submit_answer(quiz_id):
    print("submit quiz session endpoint")
    data = request.get_json()
    print(data)
    return jsonify({
        'message': 'hello from submit quiz session'
    })

@app.route('/quizzes', methods=['GET'])
def get_quizzes():
    quizzes = Quiz.query.all()
    print("quizes endpoint")
    
    return jsonify({
        'message': 'hello from quizzes update new cache',
        'no_quizzes': len(quizzes),
        'no_questions': len(Question.query.all()),
        'success': True,
        'quizzes': [quiz.format() for quiz in quizzes]
    })

@app.route('/test', methods=['GET'])
def test():
    return jsonify({
        'message': 'hello from test'
    })
    

@app.route('/seed', methods=['GET'])
def seed():
    if Question.query.count() > 0:
        return jsonify({
            'success': False,
            'message': 'Database already seeded'
        })
    else:
        seed_database()
        
        return jsonify({
            'success': True,
            'message': 'Database seeded'
        })
        
@app.route('/reset', methods=['GET'])
def reset():
    db.drop_all()
    db.create_all()
    return jsonify({
        'success': True,
        'message': 'Database reset'
    })
        





        

    


