from base import db
from sqlalchemy import Column, Integer

class BaseModel(db.Model):
    __abstract__ = True
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False, unique=True)

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

  
class Category(BaseModel):
    __tablename__ = 'categories'
    
    type = db.Column(db.String, nullable=False)

    def format(self):
        return {
            'id': self.id,
            'type': self.type
            }




