from base import db  # Import your database setup
from models import Question, Category, Quiz, QuizQuestion # Import your models
from faker import Faker
import random

fake = Faker()

def create_categories():
    categories = ['Science', 'Art', 'Geography', 'History', 'Entertainment', 'Sports', 'Random', 'Math', 'English', 'Music']
    for category in categories:
        new_category = Category(type=category)
        new_category.add()

def create_quizzes():
    quizzes = ['fun quiz', 'hard quiz']
    questions = Question.query.all()
    for quiz in quizzes:
        new_quiz = Quiz(name=quiz, time_limit=10)
        new_quiz.add()
        for question in questions:
            new_quiz.add_question(question)

def create_questions():
    category_ids = [category.id for category in Category.query.all()]
    for i in range(50):
        question = Question(
            question=fake.sentence(),
            answer=fake.word(),
            category_id=random.choice(category_ids),
            wrong_answer1=fake.word(),
            wrong_answer2=fake.word(),
            wrong_answer3=fake.word()
        )
        question.add()
           
def seed_database():
    create_categories()
    create_questions() 
    create_quizzes()

    


    



            

 

    
    