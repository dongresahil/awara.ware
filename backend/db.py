import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="#Sahil003366",
    database="awara_ware"
)

cursor = db.cursor()

print("Database Connected Successfully")