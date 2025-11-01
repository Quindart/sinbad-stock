import httpx
from typing import Any, Dict, List

CAFEF_AJAX_URL = "https://m.cafef.vn/du-lieu/Ajax/PageNew/DataHistory/PriceHistory.ashx"
async def crawl_cafef_price_history(
    symbol: str,
    page_index: int = 1,
    page_size: int = 20,
    start_date: str = "",
    end_date: str = ""
) -> Dict[str, Any]:
    """
    Crawl lịch sử giá cổ phiếu từ CafeF qua Ajax endpoint.
    Params:
      - symbol: mã cổ phiếu, ví dụ "VNINDEX", "FPT"
      - page_index: trang số
      - page_size: số bản ghi mỗi trang
      - start_date, end_date: optional, định dạng yyyy-mm-dd hoặc theo yêu cầu endpoint
    """
    params = {
        "Symbol": symbol.upper(),
        "PageIndex": page_index,
        "PageSize": page_size,
        "StartDate": start_date,
        "EndDate": end_date
    }
    headers = {
        "User-Agent": "Mozilla/5.0 (compatible; StockCrawler/1.0; +https://yourdomain.com)",
        "Accept": "application/json, text/javascript, */*; q=0.01"
    }
    async with httpx.AsyncClient(follow_redirects=True) as client:
        response = await client.get(CAFEF_AJAX_URL, params=params, headers=headers, timeout=10)
        response.raise_for_status()
        data = response.json()
    items: List[Dict[str, Any]] = data.get("Data", [])
    return {
        "symbol": symbol,
        "page_index": page_index,
        "page_size": page_size,
        "records": items
    }
