from db import db, cursor
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app, origins=[
    "https://www.awaraware.in",
    "https://awaraware.in"
])
# ================= REGISTER =================

@app.route("/register", methods=["POST"])
def register():
    data = request.json

    name = data["name"]
    email = data["email"]
    password = data["password"]

    # Check if email already exists
    cursor.execute(
        "SELECT * FROM users WHERE email = %s",
        (email,)
    )

    existing_user = cursor.fetchone()

    if existing_user:
        return jsonify({
            "message": "Email already exists"
        }), 400

    query = """
    INSERT INTO users (name, email, password)
    VALUES (%s, %s, %s)
    """

    cursor.execute(query, (name, email, password))
    db.commit()

    return jsonify({
        "message": "User Registered Successfully"
    })


# ================= LOGIN =================

@app.route("/login", methods=["POST"])
def login():
    data = request.json

    email = data["email"]
    password = data["password"]

    query = """
    SELECT * FROM users
    WHERE email = %s AND password = %s
    """

    cursor.execute(query, (email, password))

    user = cursor.fetchone()

    if user:
        return jsonify({
            "message": "Login Successful"
        })
    else:
        return jsonify({
            "message": "Invalid Credentials"
        }), 401


# ================= PLACE ORDER =================
@app.route("/place-order", methods=["POST"])
def place_order():
    data = request.json

    print("DATA RECEIVED:", data)
    print("USER EMAIL:", data["user_email"])
    print("TYPE:", type(data["user_email"]))

    user_email = data["user_email"]
    total_amount = data["total_amount"]

    cursor.execute(
        """
        INSERT INTO orders (user_email, total_amount)
        VALUES (%s, %s)
        """,
        (user_email, total_amount)
    )

    db.commit()

    return jsonify({
        "message": "Order placed successfully"
    })
    
    
#---------------------------------ADMIN DASHBOARD-----------------
@app.route("/admin/orders", methods=["GET"])
def admin_orders():

    cursor.execute("""
        SELECT id, user_email, total_amount, order_date
        FROM orders
        ORDER BY order_date DESC
    """)

    rows = cursor.fetchall()

    orders = []

    total_sales = 0

    for row in rows:
        total_sales += float(row[2])

        orders.append({
            "id": row[0],
            "user_email": row[1],
            "total_amount": float(row[2]),
            "order_date": str(row[3])
        })

    return jsonify({
        "total_orders": len(orders),
        "total_sales": total_sales,
        "orders": orders
    })
# ================= RUN SERVER =================

@app.route("/my-orders/<email>", methods=["GET"])
def my_orders(email):

    cursor.execute(
        """
        SELECT id, user_email, total_amount, order_date
        FROM orders
        WHERE user_email = %s
        ORDER BY order_date DESC
        """,
        (email,)
    )

    rows = cursor.fetchall()

    orders = []

    for row in rows:
        orders.append({
            "id": row[0],
            "user_email": row[1],
            "total_amount": float(row[2]),
            "order_date": str(row[3])
        })

    return jsonify(orders)


if __name__ == "__main__":
    app.run(debug=True)