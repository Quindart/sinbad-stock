from vnstock import Vnstock
from datetime import datetime
from typing import List, Optional

class VnstockHistoryService:
    def __init__(self):
        self.client = Vnstock()

    async def get_history_by_symbol(
        self,
        symbol: str,
        start: str = "2025-01-01",
        end: Optional[str] = None,
        interval: str = "daily",    # interval mặc định daily
        limit: Optional[int] = None
    ):
        if end is None:
            end = datetime.now().strftime("%Y-%m-%d")

        stock_obj = self.client.stock(symbol=symbol, source="TCBS")
        
        if interval == "intraday":
            # Giả sử thư viện hỗ trợ stock_obj.quote.intraday(...)
            data = stock_obj.quote.intraday(start=start, end=end)
        else:
            data = stock_obj.quote.history(start=start, end=end)

        df = data

        if limit is not None:
            df = df.tail(limit)

        return df.to_dict(orient="records")

    async def get_history_multi_symbols(
        self,
        symbols: List[str],
        start: str = "2025-01-01",
        end: Optional[str] = None,
        interval: str = "daily",
        limit: Optional[int] = None
    ):
        if end is None:
            end = datetime.now().strftime("%Y-%m-%d")

        results = {}
        for sym in symbols:
            results[sym] = await self.get_history_by_symbol(sym, start, end, interval, limit)

        return results
