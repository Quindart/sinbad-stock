from fastapi import APIRouter, Query
from typing import Optional, List
from app.infrastructure.external.vnstock_history_service import VnstockHistoryService

router = APIRouter(prefix="/history", tags=["history"])
service = VnstockHistoryService()

@router.get("/{symbol}")
async def history_symbol(
    symbol: str,
    start: str = Query("2025-01-01"),
    end: Optional[str] = Query(None),
    interval: str = Query("daily"),
    limit: Optional[int] = Query(None)
):
    data = await service.get_history_by_symbol(symbol, start, end, interval, limit)
    return {"symbol": symbol, "count": len(data), "data": data}

@router.get("/history/multi")
async def get_multi_history(
    symbols: list[str] = Query(...),
    start: str = "2025-01-01",
    end: str | None = None,
    interval: str = "1D"
):
    results = {}
    for symbol in symbols:
        try:
            data = await service.get_history_by_symbol(symbol, start=start, end=end, interval=interval)
            results[symbol] = data
        except Exception as e:
            results[symbol] = {"error": str(e)}
    return results
