from typing import List
from app.domain.stock_entity import StockEntity
from app.interfaces.stock_repository import StockRepository

class AnalyzeStockUseCase:
    def __init__(self, repo: StockRepository):
        self.repo = repo

    def execute(self, symbols: List[str]):
        stocks = self.repo.get_latest_prices(symbols)
        result = []
        for s in stocks:
            signal = "BUY" if s.price < 150 else "HOLD"
            result.append({"symbol": s.symbol, "signal": signal, "price": s.price})
        return result
