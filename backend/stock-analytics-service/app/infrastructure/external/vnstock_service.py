from vnstock import Vnstock, Listing
from datetime import datetime

class VnstockService:
    def __init__(self):
        self.client = Vnstock()

    async def get_vnindex_history(self, start="2025-01-01", end=None):
        if end is None:
            end = datetime.now().strftime("%Y-%m-%d")
        vnindex = self.client.stock(symbol="VNINDEX", source="TCBS")
        data = vnindex.quote.history(start=start, end=end)
        return data.to_dict(orient="records")

    async def get_stock_price(self, symbol: str, start="2025-01-01", end=None):
        if end is None:
            end = datetime.now().strftime("%Y-%m-%d")
        s = self.client.stock(symbol=symbol, source="TCBS")
        data = s.quote.history(start=start, end=end)
        return data.to_dict(orient="records")

    async def get_all_stocks(self):
        df = Listing().all_symbols()  
        return df.to_dict(orient="records")

    async def get_all_symbols(self):
        listing = Listing(source="VCI") 
        df = listing.all_symbols()
        return df.to_dict(orient="records")
    
    async def get_symbols_by_group(self, group_type: str):
        listing = Listing(source="VCI")
        df = listing.symbols_by_group(group_type)
        df = df.reset_index()  
        df.columns = ["symbol", "organ_name"] 
        return df.to_dict(orient="records")
