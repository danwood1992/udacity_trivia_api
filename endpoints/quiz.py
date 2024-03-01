from flask import jsonify
from models import Question, Quiz, QuizSession, Category, QuizQuestion
from base import app
from datetime import datetime
from flask import request

@app.route('/api/quiz/<uuid:quiz_id>/play', methods=['GET'])
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



@app.route('/api/quizzes', methods=['GET'])
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
    
    
@app.route('/api/quiz/<uuid:quiz_id>', methods=['DELETE'])
def delete_quiz(quiz_id):
    quiz = Quiz.query.get(quiz_id)
    if quiz is None:
        return jsonify({
            'success': False,
            'message': 'Quiz not found'
        })
    else:
        quiz.delete()
        return jsonify({
            'success': True,
            'message': 'Quiz deleted'
        })


@app.route('/api/quiz/<uuid:quiz_id>/questions', methods=['GET'])
def get_questions(quiz_id):
    questions = Question.query.filter_by(quiz_id=quiz_id).all()
    if len(questions) == 0:
        return jsonify({
            'success': False,
            'message': 'No questions found'
        })
    else:
        return jsonify({
            'success': True,
            'message': 'Questions found',
            'questions': [question.format() for question in questions]
        })

@app.route('/api/quiz/<uuid:quiz_id>/question', methods=['POST'])
def add_question(quiz_id):
    data = request.get_json()
    return jsonify({
        'success': True,
        'message': 'Question added',
        
    })
    
@app.route('api/categories', methods=['POST'])
def add_category():
    data = request.get_json()
    new_category = Category(name=data['name'])
    new_category.add()
    return jsonify({
        'success': True,
        'message': 'Category added',
        'category': new_category.format()
    })
    
@app.route('/api/category/<uuid:category_id>', methods=['POST'])
def get_questions_by_category(category_id):
    questions = Question.query.filter_by(category_id=category_id).all()
    if len(questions) == 0:
        return jsonify({
            'success': False,
            'message': 'No questions found'
        })
    else:
        return jsonify({
            'success': True,
            'message': 'Questions found',
            'questions': [question.format() for question in questions]
        })
