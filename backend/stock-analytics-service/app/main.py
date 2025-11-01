import google.generativeai as genai
from dotenv import load_dotenv
from fastapi import FastAPI
from app.api.v1.stock_route import router as stock_route
from app.api.v1.stock_history import router as stock_history
from app.api.v1.chat_route import router as chat_route

load_dotenv()

app = FastAPI(title="Stock Analytics Service", version="1.0.0")

app.include_router(stock_route, prefix="/api/v1/stocks", tags=["stocks"])
app.include_router(stock_history, prefix="/api/v1/history", tags=["history"])
app.include_router(chat_route, prefix="/api/v1/chat", tags=["chat"])


@app.get("/")
def root():
    return {"message": "Stock Analytics API + AI Chat Ready!"}