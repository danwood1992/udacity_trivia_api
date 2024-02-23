from flask import jsonify, request
from utils import seed_database
from models import Question, Category, Quiz
from base import app, db
import random

@app.route('/quizzes', methods=['GET'])
def get_quizzes():
    quizzes = Quiz.query.all()
    
    return jsonify({
        'no_quizzes': len(quizzes),
        'success': True,
        'quizzes': [quiz.format() for quiz in quizzes]
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
        


@app.route('/questions', methods=['GET'])
def get_questions():
    questions = Question.query.all()
    formatted_questions = [question.format() for question in questions]
    
    return jsonify({
        'no_questions': len(formatted_questions),
        'success': True,
        'questions': formatted_questions
    })
    
    
@app.route('/questions/<uuid:question_id>', methods=['GET'])
def get_question(question_id):
    question = Question.query.get(question_id)
    
    return jsonify({
        'success': True,
        'question': question.format()
    })
    
@app.route('/questions/<uuid:question_id>', methods=['DELETE'])
def delete_question(question_id):
    question = Question.query.get(question_id)
    question.delete()
    
    return jsonify({
        'success': True,
        'message': 'Question deleted'
    })
    
@app.route('/questions', methods=['POST'])
def add_question():
    data = request.get_json()
    question = Question(question=data['question'], answer=data['answer'], category_id=data['category_id'], wrong_answer1=data['wrong_answer1'], wrong_answer2=data['wrong_answer2'], wrong_answer3=data['wrong_answer3'])
    question.save()
    
    return jsonify({
        'success': True,
        'message': 'Question added'
    })
    



        

    


