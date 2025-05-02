from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/result", methods=["POST"])
def result():
    noun = request.form.get("noun")
    verb = request.form.get("verb")
    adjective = request.form.get("adjective")
    place = request.form.get("place")

    return render_template(
        "result.html",
        noun=noun,
        verb=verb,
        adjective=adjective,
        place=place
    )

if __name__ == "__main__":
    app.run(debug=True)
