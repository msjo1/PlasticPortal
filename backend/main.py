from fastapi import FastAPI
import psycopg2

app = FastAPI()

conn = psycopg2.connect(
    dbname="plastic_monitoring",
    user="postgres",
    password="Spidders2er",
    host="localhost"
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

    features = []

    for row in rows:
        features.append({
            "id": row[0],
            "geometry": row[1]
        })

    return features