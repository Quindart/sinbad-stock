
from fastapi import APIRouter, Depends #
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from app.infrastructure.external.chat_service import ChatService
import logging

logger = logging.getLogger(__name__)
router = APIRouter()

class ChatRequest(BaseModel):
    message: str
    user_id: str = "anonymous"

def get_chat_service() -> ChatService:
    return ChatService()

@router.post("/", response_class=StreamingResponse)
async def chat(
    request: ChatRequest,
    service: ChatService = Depends(get_chat_service)
):
    logger.info(f"User {request.user_id} asked: {request.message}")
    async def stream_generator():
        try:
            async for chunk in service.stream_response(request.message):
                yield f"data: {chunk}\n\n"
        except Exception as e:
            logger.error(f"AI Error: {e}")
            yield f"data: [Lỗi] Không thể xử lý yêu cầu.\n\n"

    return StreamingResponse(stream_generator(), media_type="text/event-stream")