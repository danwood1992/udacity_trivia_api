from flask import jsonify
from utils import seed_database
from models import Question, Quiz
from base import app, db


@app.route('/info', methods=['GET'])
def info():
    questions = Question.query.all()
    quizzes = Quiz.query.all()
    
    return jsonify({
        'message': 'hello from info',
        'questions': len(questions),
        'quizzes': len(quizzes)
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
    
