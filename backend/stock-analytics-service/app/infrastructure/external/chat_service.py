from typing import AsyncGenerator
from .gemini_service import GeminiFinanceAI
import os
class ChatService:
    def __init__(self):
        self.ai = GeminiFinanceAI(os.getenv("GEMINI_API_KEY"))
    async def stream_response(self, message: str) -> AsyncGenerator[str, None]:
        try:
            response = self.ai.ask(message, stream=True)
            for chunk in response:
                if chunk:
                    yield chunk
        except Exception as e:
            yield f"Lỗi AI: {str(e)}"