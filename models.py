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
    category_id = db.Column(UUID(as_uuid=True), db.ForeignKey('categories.id'), nullable=False)
    wrong_answer1 = db.Column(db.String, nullable=False)
    wrong_answer2 = db.Column(db.String, nullable=False)
    wrong_answer3 = db.Column(db.String, nullable=False)
    
    def format(self):
        return {
            'id': self.id,
            'question': self.question,
            'category': self.category.type,
            'options': [
                {'text': self.answer},
                {'text': self.wrong_answer1},
                {'text': self.wrong_answer2},
                {'text': self.wrong_answer3}
            ],
          
            
              
        }
 
class Quiz(BaseModel):
    __tablename__ = 'quizzes'
    
    name = db.Column(db.String, nullable=False)
    time_limit = db.Column(db.Integer, nullable=False)
    
    def formatted_questions(self):
       
        return [quiz_question.question.format() for quiz_question in self.questions]
    
    
    def format(self):
        
        return {
            'id': self.id,
            'name': self.name,
            'link': f'/play/{self.id}', 
            'time_limit': self.time_limit,
            'questions': self.formatted_questions()
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
    
    quiz = db.relationship('Quiz', backref='questions')
    quiz_id = db.Column(UUID(as_uuid=True), db.ForeignKey('quizzes.id'), primary_key=True)
    question = db.relationship('Question', backref='quizzes')
    question_id = db.Column(UUID(as_uuid=True), db.ForeignKey('questions.id'), primary_key=True)
    

class QuizSession(BaseModel):
    __tablename__ = 'quiz_sessions'
    
    quiz = db.relationship('Quiz', backref='sessions')
    quiz_id = db.Column(UUID(as_uuid=True), db.ForeignKey('quizzes.id'), nullable=False)
    score = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    
    def format(self):
        return {
            'id': self.id,
            'quiz': self.quiz.name,
            'score': self.score,
            'date': self.date
        }
    
    def update_score(self):
        self.score = self.score + 1
        self.update()
        return True
    
    
    