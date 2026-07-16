from flask import Flask, request, jsonify
from flask_cors import CORS
import fitz  # PyMuPDF

app = Flask(__name__)
CORS(app)

@app.route("/extract", methods=["POST"])
def extract():
    if "resume" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["resume"]

    pdf = fitz.open(stream=file.read(), filetype="pdf")

    text = ""

    for page in pdf:
        text += page.get_text()

    return jsonify({
        "text": text
    })

if __name__ == "__main__":
    app.run(debug=True)