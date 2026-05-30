from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import psycopg2

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
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



@app.get("/country_summary")
def country_summary():

    cur = conn.cursor()

    cur.execute("""
        SELECT country,
               COUNT(*) AS detections
        FROM plastic_detection
        GROUP BY country
        ORDER BY detections DESC
    """)

    rows = cur.fetchall()

    return rows
    
