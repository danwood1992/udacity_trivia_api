from models import Question, Category

categories = [
    'Science',
    'Art',
    'Geography',
    'History',
    'Entertainment',
    'Sports'
]

science_questions = {
    'Hematology is a branch of medicine involving the study of what' : 'Blood',
    'What is the heaviest organ in the human body?' : 'The Liver',
    'Who discovered penicillin?' : 'Alexander Fleming',   
}

art_questions = {
    'Which American artist was a pioneer of Abstract Expressionism, and a leading exponent of action painting?' : 'Jackson Pollock',
    'How many paintings did Van Gogh sell in his lifetime?' : 'One',
    'La Giaconda is better known as what?' : 'Mona Lisa',
    'Which Dutch graphic artist–initials M C was a creator of optical illusions?' : 'Escher',
}

geography_questions = {
    'The Taj Mahal is located in which Indian city?' : 'Agra',
    'In which royal palace would you find the Hall of Mirrors?' : 'The Palace of Versailles',
    'What is the largest lake in Africa?' : 'Lake Victoria',
}

history_questions = {
    'Who invented Peanut Butter?' : 'George Washington Carver',
    'Which country won the first ever soccer World Cup in 1930?' : 'Uruguay',
    'What is the name of the ship that brought the Pilgrims to America?' : 'The Mayflower',
    'Who was the first President of the United States?' : 'George Washington',
    'What year was the first model T car built?' : '1908',
    'Abraham Lincoln was assassinated in which year?' : '1865',
    'What year did the Titanic sink?' : '1912',
    'What year did World War I begin?' : '1914',
    'What year did World War II begin?' : '1939',
    'What year did the Berlin Wall fall?' : '1989',
    'What year did the Vietnam War end?' : '1975',
    'What year did the Korean War end?' : '1953',
    'What year did the Cold War end?' : '1991',
    'What year did the Civil War end?' : '1865',
    'What year did the American Revolution end?' : '1783',
}

entertainment_questions = {
    'What was the title of the 1990 fantasy directed by Tim Burton' : 'Edward Scissorhands',
    'What actor did author Anne Rice first denounce, then praise in the role of her beloved Lestat?' : 'Tom Cruise',
    'What movie earned Tom Hanks his third straight Oscar nomination, in 1996?' : 'Apollo 13',
    'Whose autobiography is entitled I Know Why the Caged Bird Sings?' : 'Maya Angelou',
    'What boxer\'s original name is Cassius Clay?' : 'Muhammad Ali',
}

sports_questions = {
    'Which is the only team to play in every soccer World Cup tournament?' : 'Brazil',
    'Which country hosted the 2018 FIFA World Cup?' : 'Russia',
    'Which country has won the most FIFA World Cups?' : 'Brazil',
    'Which country won the first ever soccer World Cup in 1930?' : 'Uruguay',
    'Which player holds the record for the most goals scored in a single World Cup?' : 'Just Fontaine',
    'Which player has won the most World Cup medals?' : 'Pelé',
    '§Which player has scored the most goals in World Cup history?' : 'Miroslav Klose',
    
}


def seed_database():
    for category in categories:
        category = Category(name=category)
        category.save()
        if category.name == 'Science':
            for question in science_questions:
                q = Question(question=question, answer=science_questions[question], category=category)
                q.save()
        elif category.name == 'Art':
            for question in art_questions:
                q = Question(question=question, answer=art_questions[question], category=category)
                q.save()
        elif category.name == 'Geography':
            for question in geography_questions:
                q = Question(question=question, answer=geography_questions[question], category=category)
                q.save()
        elif category.name == 'History':
            for question in history_questions:
                q = Question(question=question, answer=history_questions[question], category=category)
                q.save()
        elif category.name == 'Entertainment':
            for question in entertainment_questions:
                q = Question(question=question, answer=entertainment_questions[question], category=category)
                q.save()
        elif category.name == 'Sports':
            for question in sports_questions:
                q = Question(question=question, answer=sports_questions[question], category=category)
                q.save()
    print('Database seeded')
    
    