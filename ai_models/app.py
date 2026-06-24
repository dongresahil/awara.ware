from flask import Flask, request, jsonify # type: ignore
import pandas as pd

app = Flask(__name__)

df = pd.read_csv("products.csv")

@app.route("/recommend", methods=["GET"])
def recommend():
    category = request.args.get("category")

    result = df[
        df["category"].str.lower() == category.lower()
    ]

    recommendations = result["product_name"].tolist()

    return jsonify(recommendations)

if __name__ == "__main__":
    app.run(debug=True)