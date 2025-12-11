from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import symptom, auth

app = FastAPI(title="HomeoHeal Basic Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True
)

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(symptom.router, prefix="/symptom", tags=["symptom"])
