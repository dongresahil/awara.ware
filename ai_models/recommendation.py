import pandas as pd

df = pd.read_csv("products.csv")

def recommend(category):
    result = df[df["category"].str.lower() == category.lower()]
    return result["product_name"].tolist()

print(recommend("Anime"))