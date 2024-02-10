from base import db  # Import your database setup
from models import Question, Category  # Import your models
from faker import Faker
import random

fake = Faker()


def create_categories():
    categories = ['Science', 'Art', 'Geography', 'History', 'Entertainment', 'Sports']
    for category in categories:
        new_category = Category(type=category)
        new_category.add()
        
def seed_database():
    create_categories()
    for i in range(10):
        question = Question(
            question=fake.sentence(),
            answer=fake.word(),
            category_id=random.randint(1, 6),
            wrong_answer1=fake.word(),
            wrong_answer2=fake.word(),
            wrong_answer3=fake.word()
        )
        question.add()
        
    print('Database seeded')


    



            

 

    
    