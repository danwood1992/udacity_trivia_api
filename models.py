from base import db
from sqlalchemy import Column, Integer
from sqlalchemy.dialects.postgresql import UUID
import uuid

class BaseModel(db.Model):
    __abstract__ = True
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

    def add(self):
        db.session.add(self)
        db.session.commit()
        if self.id:
            return True
        
    def save(self):
        db.session.add(self)
        db.session.commit()
        if self.id:
            return True
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()
        if self.id:
            return True
        
    def update(self):
        db.session.commit()
        if self.id:
            return True
    
  
class Category(BaseModel):
    __tablename__ = 'categories'
    
    type = db.Column(db.String, nullable=False)

    def format(self):
        return {
            'id': self.id,
            'type': self.type
            }
      
class Question(BaseModel):
    __tablename__ = 'questions'

    question = db.Column(db.String, nullable=False)
    answer = db.Column(db.String, nullable=False)
    category = db.relationship('Category', backref='questions')
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    wrong_answer1 = db.Column(db.String, nullable=False)
    wrong_answer2 = db.Column(db.String, nullable=False)
    wrong_answer3 = db.Column(db.String, nullable=False)
    difficulty = db.Column(db.Integer, nullable=False)
    
    def format(self):
        return {
            'id': self.id,
            'question': self.question,
            'category': self.category.type,
            'options': [
                {'text': self.answer, 'is_correct': True},
                {'text': self.wrong_answer1, 'is_correct': False},
                {'text': self.wrong_answer2, 'is_correct': False},
                {'text': self.wrong_answer3, 'is_correct': False}
            ],
            'difficulty': self.difficulty,
            'answered': False,
            'answered_correctly': False,
              
        }
    
class Quiz(BaseModel):
    __tablename__ = 'quizzes'
    
    name = db.Column(db.String, nullable=False)
    time_limit = db.Column(db.Integer, nullable=False)
    
    def format(self):
        return {
            'id': self.id,
            'name': self.name,
            'time_limit': self.time_limit,
            'questions': [question.format() for question in self.questions]
        }
        
    def add_question(self, question):
        quiz_question = QuizQuestion(quiz_id=self.id, question_id=question.id)
        quiz_question.add()
        return True
    
    def remove_question(self, question):
        quiz_question = QuizQuestion.query.filter_by(quiz_id=self.id, question_id=question.id).first()
        quiz_question.delete()
        return True


class QuizQuestion(BaseModel):
    __tablename__ = 'quiz_questions'
    
    quiz_id = db.Column(UUID(as_uuid=True), db.ForeignKey('quizzes.id'), primary_key=True)
    question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), primary_key=True)
    question = db.relationship('Question', backref='quizzes')
    
    
    