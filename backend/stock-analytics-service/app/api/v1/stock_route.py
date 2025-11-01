from fastapi import APIRouter
from app.infrastructure.external.vnstock_service import VnstockService

router = APIRouter(prefix="/stocks", tags=["stocks"])
service = VnstockService()

@router.get("/vnindex")
async def crawl_vnindex(start: str = "2025-01-01", end: str = None):
    data = await service.get_vnindex_history(start, end)
    return {"count": len(data), "data": data[:10]}  

@router.get("/symbols/{symbol}")
async def stock(symbol: str, start: str = "2025-01-01", end: str = None):
    data = await service.get_stock_price(symbol, start, end)
    return {"symbol": symbol, "count": len(data), "data": data[:10]}

@router.get("/")
async def crawl_all_stocks():
    data = await service.get_all_stocks()
    return {"count": len(data), "data": data[:10]}

@router.get("/symbols")
async def all_symbols():
    data = await service.get_all_symbols()
    return {"count": len(data), "data": data}

@router.get("/symbols/by-group/{group_type}")
async def symbols_by_group(group_type: str):
    data = await service.get_symbols_by_group(group_type)
    return {"count": len(data), "data": data[:10]}