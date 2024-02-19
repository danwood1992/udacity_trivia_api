from flask import jsonify, request
from utils import seed_database
from models import Question, Category
from base import app, db
import random

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
        

@app.route('/categories', methods=['GET'])
def get_categories():
    categories = Category.query.all()
    formatted_categories = [category.format() for category in categories]
    
    return jsonify({
        'categories': formatted_categories,
        'no_categories': len(formatted_categories),
        'success': True,
        'randomcat': random.choice(formatted_categories)
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
    
@app.route('/firstquestion', methods=['GET'])
def first_question():
    first_question = Question.first()
    
    return jsonify({
        'success': True,
        'question': first_question
    })
    
@app.route('/questions/<int:question_id>', methods=['GET'])
def get_question(question_id):
    question = Question.get(question_id)
    
    return jsonify({
        'success': True,
        'question': question.format()
    })
    
@app.route('/questions/<int:question_id>', methods=['DELETE'])
def delete_question(question_id):
    question = Question.get(question_id)
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
    
@app.route('/questions/<int:question_id>', methods=['PATCH'])
def update_question(question_id):
    data = request.get_json()
    question = Question.get(question_id)
    question.question = data['question']
    question.answer = data['answer']
    question.category_id = data['category_id']
    question.wrong_answer1 = data['wrong_answer1']
    question.wrong_answer2 = data['wrong_answer2']
    question.wrong_answer3 = data['wrong_answer3']
    question.update()
    
    return jsonify({
        'success': True,
        'message': 'Question updated'
    })
    
@app.route('/categories/<int:category_id>/questions', methods=['GET'])
def get_category_questions(category_id):
    questions = Question.filter(category_id=category_id)
    formatted_questions = [question.format() for question in questions]
    
    return jsonify({
        'success': True,
        'questions': formatted_questions
    })
    
@app.route('/categories/<int:category_id>/questions', methods=['POST'])
def add_category_question(category_id):
    data = request.get_json()
    question = Question(question=data['question'], answer=data['answer'], category_id=category_id, wrong_answer1=data['wrong_answer1'], wrong_answer2=data['wrong_answer2'], wrong_answer3=data['wrong_answer3'])
    question.save()
    
    return jsonify({
        'success': True,
        'message': 'Question added'
    })
    


        

    


