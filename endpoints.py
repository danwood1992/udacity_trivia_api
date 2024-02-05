from flask import jsonify
from models import Question, Category, Quiz
from base import app, db

@app.route('/categories', methods=['GET'])
def get_categories():
    categories = Category.query.all()
    formatted_categories = [category.format() for category in categories]
    
    return jsonify({
        'success': True,
        'categories': formatted_categories
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
    


