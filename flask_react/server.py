from flask import Flask, send_from_directory
import os
app = Flask(__name__)


@app.route('/')
def index():
    return send_from_directory('./front_end/public', 'index.html')


if __name__ == '__main__':
    app.run(debug=1)
