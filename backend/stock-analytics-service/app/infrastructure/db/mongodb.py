from typing import Dict, Any
from app.core.database import db

async def insert_stock(data: Dict[str, Any]):
    result = await db.stocks.insert_one(data)
    return str(result.inserted_id)

async def get_stocks():
    cursor = db.stocks.find()
    return [doc async for doc in cursor]
