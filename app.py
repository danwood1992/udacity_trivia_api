from base import app
from middlewares import setup_middlewares
import endpoints.quiz, endpoints.session, endpoints.tools

setup_middlewares(app)

if __name__ == '__main__': 
   app.run(host="0.0.0.0", port=5125, debug=True)


