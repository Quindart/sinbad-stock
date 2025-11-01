from pydantic import BaseModel

class StockEntity(BaseModel):
    symbol: str
    price: float
    volume: int
