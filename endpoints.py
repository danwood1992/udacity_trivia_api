from flask import jsonify
from dataseed import seed_database
from models import Question, Category
from base import app, db

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
    


