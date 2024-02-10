from base import db
from sqlalchemy import Column, String, Integer

class BaseModel(db.Model):
    __abstract__ = True
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False, unique=True)

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
    
    def all(self):
        return self.query.all()
    
    def get(self, id):
        return self.query.get(id)
    
    def first(self):
        return self.query.first()
    
    def last(self):
        return self.query.last()
    
    def filter(self, **kwargs):
        return self.query.filter_by(**kwargs).all()
    
    def count(self):
        return self.query.count()
            
    def repr(self):
        return f'{self.name}'
    
     
class Question(BaseModel):
    __tablename__ = 'questions'

    question = db.Column(db.String, nullable=False)
    answer = db.Column(db.String, nullable=False)
    category = db.relationship('Category', backref='questions')
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    wrong_answer1 = db.Column(db.String, nullable=False)
    wrong_answer2 = db.Column(db.String, nullable=False)
    wrong_answer3 = db.Column(db.String, nullable=False)
    difficulty = Column(Integer)

  
class Category(BaseModel):
    __tablename__ = 'categories'
    
    type = db.Column(db.String, nullable=False)

    def format(self):
        return {
            'id': self.id,
            'type': self.type
            }




