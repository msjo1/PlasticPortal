from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import psycopg2

app = FastAPI()

conn = psycopg2.connect(
    dbname="postgres_b_7amy",
    user="postgres_b_7amy_user",
    password="mBpU31fO4XJOvi7ARapuhbZd4YqPR61u",
    host="dpg-d8at4l0js32c73btnvtg-a",
    port="5432"
)

@app.get("/plastic")
def get_plastic():

    cur = conn.cursor()

    cur.execute("""
        SELECT id,
        ST_AsGeoJSON(geom)
        FROM plastic_detection
    """)

    rows = cur.fetchall()

    output = []

    for row in rows:

        output.append({
            "id": row[0],
            "geometry": row[1]
        })

    return output
