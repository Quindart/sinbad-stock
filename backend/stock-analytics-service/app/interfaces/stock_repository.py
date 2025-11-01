from abc import ABC, abstractmethod
from typing import List
from app.domain.stock_entity import StockEntity

class StockRepository(ABC):
    @abstractmethod
    def get_latest_prices(self, symbols: List[str]) -> List[StockEntity]:
        pass
